import Link from "next/link"
import { Dna } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Dna className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">LeukemiaDetect</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Empowering early detection through advanced technology.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  About Leukemia
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Detection Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-gray-600 mb-2">
                Medical Research Center
                <br />
                123 Health Avenue
                <br />
                Boston, MA 02115
              </p>
              <p className="text-sm text-gray-600">
                <span className="block mb-1">Email: info@leukemiadetect.org</span>
                <span className="block mb-1">Phone: +1 (555) 123-4567</span>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LeukemiaDetect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
