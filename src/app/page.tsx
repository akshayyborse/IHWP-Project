"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-beige">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brown mb-4">My Prakriti Check 🌿</h1>
          <p className="text-lg text-brown mb-8">
            Discover your Ayurvedic body constitution.
          </p>
          <p className="text-brown mb-8">
            Ayurveda is an ancient Indian healing system that recognizes three fundamental energies or doshas - Vata, Pitta, and Kapha. Your unique combination of these doshas determines your physical and mental characteristics, known as your Prakriti or constitution. Understanding your Prakriti can help you make informed choices about diet, lifestyle, and wellness practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quiz"
              className="bg-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              Start Test
            </Link>
            <Link 
              href="/about"
              className="bg-golden hover:bg-opacity-90 text-brown font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}