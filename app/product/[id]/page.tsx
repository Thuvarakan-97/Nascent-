import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { LaptopSpecs } from "@/app/components/laptop-specs"


interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

// Laptop image URLs
const laptopImages = [
  "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000&auto=format&fit=crop",
]

// Fetch product data on each request (SSR)
async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store", 
  })

  if (!res.ok) {
    notFound()
  }

  const product = await res.json()

  
  const laptopBrands = ["Dell", "HP", "Lenovo", "ASUS", "Acer", "Apple", "Microsoft", "MSI", "Razer", "Samsung"]
  const laptopSeries = [
    "XPS",
    "Inspiron",
    "Pavilion",
    "ThinkPad",
    "ROG",
    "Predator",
    "MacBook Pro",
    "Surface",
    "GS Series",
    "Blade",
    "Galaxy Book",
  ]
  const laptopTypes = ["Gaming", "Ultrabook", "Business", "Student", "Creator", "2-in-1"]

  const randomBrand = laptopBrands[Math.floor(Math.random() * laptopBrands.length)]
  const randomSeries = laptopSeries[Math.floor(Math.random() * laptopSeries.length)]
  const randomType = laptopTypes[Math.floor(Math.random() * laptopTypes.length)]

  // Use a laptop image based on the product ID
  const laptopImage = laptopImages[Number.parseInt(id) % laptopImages.length]

  return {
    ...product,
    title: `${randomBrand} ${randomSeries} ${Math.floor(Math.random() * 9) + 1}${Math.floor(Math.random() * 900) + 100} ${randomType} Laptop`,
    category: `${randomType} Laptop`,
    description: `This ${randomBrand} ${randomSeries} laptop features a powerful Intel Core i${Math.floor(Math.random() * 5) + 5} processor, ${Math.floor(Math.random() * 16) + 8}GB RAM, ${Math.floor(Math.random() * 2) + 1}TB SSD storage, and a stunning ${Math.floor(Math.random() * 5) + 13}-inch display. Perfect for ${randomType.toLowerCase()} tasks with exceptional performance and battery life.

Additional specifications:
• Graphics: NVIDIA GeForce RTX 30${Math.floor(Math.random() * 10)}0 Series
• Display: ${Math.floor(Math.random() * 5) + 13}" ${Math.random() > 0.5 ? "4K UHD" : "Full HD"} ${Math.random() > 0.5 ? "Touchscreen" : "Anti-Glare"}
• Battery: Up to ${Math.floor(Math.random() * 10) + 5} hours
• Weight: ${(Math.random() * 2 + 1).toFixed(1)} lbs
• Operating System: ${Math.random() > 0.3 ? "Windows 11 Pro" : "macOS Monterey"}
• Connectivity: Thunderbolt 4, USB-C, HDMI, Wi-Fi 6, Bluetooth 5.2`,
    image: laptopImage,
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product: Product = await getProduct(params.id)

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Laptops
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px] md:h-[500px] bg-white rounded-lg overflow-hidden border">
          <Image
            src={product.image || "/placeholder.svg?height=500&width=500"}
            alt={product.title}
            fill
            className="object-cover p-4"
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-500 mt-2 capitalize">{product.category}</p>

          <div className="mt-4 bg-gray-50 p-4 rounded-md">
            <p className="text-3xl font-bold text-slate-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mt-1">Free shipping on all orders</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">About this laptop</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{product.description}</p>
          </div>

          {/* Extract specs from the description */}
          {(() => {
            const descriptionText = product.description
            const brandMatch = product.title.match(/^(\w+)/)
            const modelMatch = product.title.match(/^(\w+)\s+(\w+)/)

            // Extract specs from the description
            const processorMatch = descriptionText.match(/Intel Core i\d+/)
            const ramMatch = descriptionText.match(/(\d+)GB RAM/)
            const storageMatch = descriptionText.match(/(\d+)TB SSD/)
            const displayMatch = descriptionText.match(/(\d+)-inch display/)
            const graphicsMatch = descriptionText.match(/NVIDIA GeForce RTX \d+/)
            const osMatch = descriptionText.match(/Windows 11 Pro|macOS Monterey/)

            return (
              <LaptopSpecs
                brand={brandMatch ? brandMatch[1] : "Unknown"}
                model={modelMatch ? modelMatch[2] : "Unknown"}
                processor={processorMatch ? processorMatch[0] : "Intel Core Processor"}
                ram={ramMatch ? ramMatch[1] + "GB" : "16GB"}
                storage={storageMatch ? storageMatch[1] + "TB SSD" : "512GB SSD"}
                graphics={graphicsMatch ? graphicsMatch[0] : "Integrated Graphics"}
                display={displayMatch ? displayMatch[1] + '"' : '15.6"'}
                os={osMatch ? osMatch[0] : "Windows 11"}
              />
            )
          })()}

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-600 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex-1">
              Add to Cart
            </button>
            <Link
              href="/contact"
              className="border border-slate-600 text-slate-600 hover:bg-slate-50 font-medium py-3 px-6 rounded-md transition-colors text-center flex-1"
            >
              Inquire About This Laptop
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
