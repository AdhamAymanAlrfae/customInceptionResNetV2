from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
from tensorflow.keras.models import load_model
from PIL import Image
import io
import os
import logging
from typing import List

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Leukemia Detection API",
    description="API for detecting leukemia from blood cell images.",
    version="1.0.0"
)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
MODEL_PATH = "customInceptionResNetV2.keras"
if not os.path.exists(MODEL_PATH):
    raise RuntimeError(f"Model file {MODEL_PATH} not found.")
model = load_model(MODEL_PATH)

class_names = ["Benign", "Pre", "Pro", "Early"]
recommendations = {
    "Benign": "No leukemia detected, but regular checkups are important.",
    "Pre": "Pre-leukemic condition detected. Consult a hematologist.",
    "Pro": "Pro-leukemic markers identified. Urgent medical attention required.",
    "Early": "Early stage leukemia markers detected. Consult an oncologist."
}


class AnalysisResult(BaseModel):
    classification: str
    confidence: float
    recommendation: str


def preprocess_image(image_bytes):
    try:
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        image = image.resize((224, 224))
        image_array = np.array(image)
        image_array = np.expand_dims(image_array, axis=0)
        return image_array
    except Exception as e:
        raise HTTPException(
            status_code=400, detail="Invalid or corrupted image file.")


@app.post("/analyze", response_model=AnalysisResult)
async def analyze_image(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid file type.")

    logger.info(f"Received file: {file.filename}, size: {file.size}")
    image_bytes = await file.read()
    processed_image = preprocess_image(image_bytes)
    logger.info(
        f"Preprocessed image shape: {processed_image.shape}, min: {processed_image.min()}, max: {processed_image.max()}")

    predictions = model.predict(processed_image)
    logger.info(f"Raw predictions: {predictions[0]}")
    predicted_idx = np.argmax(predictions[0])
    confidence = float(np.max(predictions[0])) * 100
    classification = class_names[predicted_idx]
    logger.info(f"Classification: {classification}, Confidence: {confidence}")
    recommendation = recommendations[classification]
    logger.info(f"Recommendation: {recommendation}")

    return {
        "classification": classification,
        "confidence": round(confidence, 2),
        "recommendation": recommendation
    }


@app.post("/analyze-directory")
async def analyze_directory(dir_path: str):
    if not os.path.isdir(dir_path):
        raise HTTPException(status_code=400, detail="Directory not found.")

    benign_images: List[str] = []
    supported_ext = (".jpg", ".jpeg", ".png", ".bmp")

    for filename in os.listdir(dir_path):
        if filename.lower().endswith(supported_ext):
            file_path = os.path.join(dir_path, filename)
            try:
                with open(file_path, "rb") as f:
                    image_bytes = f.read()
                processed_image = preprocess_image(image_bytes)
                predictions = model.predict(processed_image)
                predicted_idx = np.argmax(predictions[0])
                classification = class_names[predicted_idx]
                if classification != "Benign":
                    benign_images.append(file_path)
            except Exception as e:
                logger.error(f"Error processing {file_path}: {e}")

    return {"benign_images": benign_images}


@app.get("/")
async def root():
    return {"message": "Leukemia Detection API with real model is running!"}
