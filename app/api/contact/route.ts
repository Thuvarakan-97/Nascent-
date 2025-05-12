import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    
    const body = await request.json()
    const { name, email, message } = body

    
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    
    console.log("Contact form submission:", { name, email, message })

    
    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
