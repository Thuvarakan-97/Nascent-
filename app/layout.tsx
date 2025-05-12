import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Platinum Laptops",
  description: "Discover premium laptops from our collection",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-slate-600">
              Platinum Laptops
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:text-slate-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-slate-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-50 border-t mt-12">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Platinum Laptops. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
