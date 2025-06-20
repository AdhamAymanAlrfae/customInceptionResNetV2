import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, FileUp, Dna } from "lucide-react"
import Link from "next/link"
import LeukemiaDetectionApp from "@/components/leukemia-detection-app"
import AboutLeukemia from "@/components/about-leukemia"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-xl">LeukemiaDetect</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#disclaimer"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Disclaimer
            </Link>
            <Button size="sm" variant="outline" className="ml-2">
              Contact Us
            </Button>
          </nav>
          <Button size="sm" variant="ghost" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 z-0">
            <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover"></div>
          </div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-1">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Detect Leukemia Early. <span className="text-blue-600">Save Lives.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Leukemia is a type of blood cancer that affects blood cells and bone marrow. Early detection
                significantly improves treatment outcomes and survival rates.
              </p>
             
            </div>
          </div>
        </section>

        {/* Main Detection App */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <LeukemiaDetectionApp />
          </div>
        </section>

        {/* About Leukemia Section */}
        <section id="about" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <AboutLeukemia />
          </div>
        </section>

        {/* Disclaimer Section */}
        <section id="disclaimer" className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  Medical Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This tool is designed to assist in the early detection of leukemia but is not a substitute for
                  professional medical diagnosis. The results provided are based on image analysis algorithms and should
                  be confirmed by healthcare professionals. Always consult with a qualified medical practitioner for
                  proper diagnosis and treatment.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">
                  If you experience any symptoms or have concerns about your health, please seek immediate medical
                  attention.
                </p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
