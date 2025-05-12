import Image from "next/image"
import Link from "next/link"


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


export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  }).then((res) => res.json())

  return products.map((product: Product) => ({
    id: String(product.id),
  }))
}

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const products = await res.json()

  return products.map((product: Product, index: number) => {
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


    const laptopImage = laptopImages[index % laptopImages.length]

    return {
      ...product,
      title: `${randomBrand} ${randomSeries} ${Math.floor(Math.random() * 9) + 1}${Math.floor(Math.random() * 900) + 100} ${randomType} Laptop`,
      category: `${randomType} Laptop`,
      description: `This ${randomBrand} ${randomSeries} laptop features a powerful Intel Core i${Math.floor(Math.random() * 5) + 5} processor, ${Math.floor(Math.random() * 16) + 8}GB RAM, ${Math.floor(Math.random() * 2) + 1}TB SSD storage, and a stunning ${Math.floor(Math.random() * 5) + 13}-inch display. Perfect for ${randomType.toLowerCase()} tasks with exceptional performance and battery life.`,
      image: laptopImage,
    }
  })
}

export default async function Home() {
  const products: Product[] = await getProducts()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Premium Laptop Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group">
            <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
              <div className="relative h-64 bg-gray-50">
                <Image
                  src={product.image || "/placeholder.svg?height=300&width=300"}
                  alt={product.title}
                  fill
                  className="object-cover p-2"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium line-clamp-1 group-hover:text-slate-600 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                <p className="font-bold text-lg mt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block bg-slate-600 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </main>
  )
}
