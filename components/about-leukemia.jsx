import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutLeukemia() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">About Leukemia</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Understanding leukemia is the first step toward early detection and treatment.
        </p>
      </div>

      <Tabs defaultValue="what-is-leukemia">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="what-is-leukemia">What is Leukemia?</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
        </TabsList>

        <TabsContent value="what-is-leukemia" className="py-6">
          <Card>
            <CardHeader>
              <CardTitle>What is Leukemia?</CardTitle>
              <CardDescription>A comprehensive overview of leukemia and its impact on the body</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Leukemia is a type of cancer that affects the blood and bone marrow, the spongy center of bones where
                blood cells are formed. It occurs when the body produces abnormal white blood cells that don't function
                properly.
              </p>
              <p>In leukemia, the abnormal cells crowd out healthy blood cells, impairing the body's ability to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fight infection (due to abnormal white blood cells)</li>
                <li>Control bleeding (due to low platelet counts)</li>
                <li>Transport oxygen (due to low red blood cell counts)</li>
              </ul>
              <p>
                Early detection is crucial for successful treatment. Modern diagnostic techniques, including AI-assisted
                image analysis, can help identify cellular abnormalities that may indicate leukemia.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="types" className="py-6">
          <Card>
            <CardHeader>
              <CardTitle>Types of Leukemia</CardTitle>
              <CardDescription>The main classifications of leukemia and their characteristics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our detection system classifies blood samples into four categories based on cellular patterns:</p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Benign</h4>
                  <p className="text-sm">
                    Normal blood cells with no signs of leukemia. Regular checkups are still recommended.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Pre</h4>
                  <p className="text-sm">
                    Pre-leukemic condition showing early cellular changes that require monitoring and further testing.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Pro</h4>
                  <p className="text-sm">
                    Pro-leukemic markers indicating a high probability of leukemia development. Immediate medical
                    consultation required.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Early</h4>
                  <p className="text-sm">
                    Early stage leukemia with definitive cellular abnormalities. Urgent medical intervention needed.
                  </p>
                </div>
              </div>

              <p className="mt-4">
                Our detection tool is specifically designed to identify cellular patterns associated with these stages,
                allowing for timely intervention when needed.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms" className="py-6">
          <Card>
            <CardHeader>
              <CardTitle>Common Symptoms</CardTitle>
              <CardDescription>Warning signs that may indicate leukemia</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Leukemia symptoms can vary depending on the type and stage, but common signs include:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Persistent fatigue and weakness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Frequent infections or fevers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Easy bruising or bleeding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Unexplained weight loss</span>
                  </li>
                </ul>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Swollen lymph nodes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Bone or joint pain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Shortness of breath</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                    <span>Pale skin</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-amber-800 font-medium">
                  If you experience any of these symptoms, consult a healthcare professional immediately. Early
                  diagnosis significantly improves treatment outcomes.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
