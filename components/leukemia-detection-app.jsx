"use client";
import { useState } from "react";
import { Input } from "./ui/input";

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setResult(null); 
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsProcessing(true);

    try {
      // Prepare the image for backend
      const formData = new FormData();
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      formData.append("file", blob, "uploaded_image.jpg");

      // Call your backend API
      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to analyze image");
      }

      const data = await res.json();

      setResult(data);
    } catch (error) {
      console.error("Error analyzing image:", error);
      alert("Something went wrong during analysis. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Upload Your Image</h1>

      <Input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginBottom: "20px" }}
      />

      {selectedImage && (
        <div style={{ marginBottom: "20px" }}>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}

      <button
        onClick={analyzeImage}
        disabled={isProcessing}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: isProcessing ? "not-allowed" : "pointer",
          backgroundColor: isProcessing ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        {isProcessing ? "Processing..." : "Submit for Analysis"}
      </button>

      {result && (
        <div style={{ marginTop: "30px", textAlign: "left" }}>
          <h2>Result:</h2>
          <p>
            <strong>Classification:</strong> {result.classification}
          </p>
          <p>
            <strong>Confidence:</strong> {result.confidence}%
          </p>
          <p>
            <strong>Recommendation:</strong> {result.recommendation}
          </p>
        </div>
      )}
    </div>
  );
}
