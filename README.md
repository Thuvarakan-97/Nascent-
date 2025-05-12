Mini Laptop Store Showcase
A responsive Next.js web application for Nascent Group's technical challenge. This project simulates a laptop store with a catalog of laptops, detailed product pages, and a contact form, using Static Site Generation (SSG), Server-Side Rendering (SSR), and Next.js API Routes.
Features

Product Listing Page: Displays laptops using Static Site Generation, with data from the Fake Store API transformed into realistic laptop models (e.g., Dell, HP).
Product Detail Page: Shows laptop specs (e.g., processor, RAM) using Server-Side Rendering, with Unsplash images.
Contact Form: Submits inquiries via a Next.js API Route (no email sending).
Responsive Design: Optimized for desktop and mobile using Tailwind CSS.


Technologies Used
Next.js
Tailwind CSS
Fake Store API
Unsplash Images
React
Next.js Image
JavaScript

Prerequisites

Node.js (v14+)
npm
Git

How to Run

Clone the Repository:
git clone https://github.com/Thuvarakan-97/Nascent-
cd mini-laptop-store


Install Dependencies:
npm install


Run the Development Server:
npm run dev


Access the App:

Open http://localhost:3000
Catalog: /
Details: /products/[id] (e.g., /products/1)
Contact: /contact



Notes for Improvement

Add loading states for API calls.
Improve error handling for failed requests.
Enhance form validation (e.g., email format).
Add search/filter for laptops.
Support multiple currencies (currently USD).

Author
Ponraj Thuvarakan
