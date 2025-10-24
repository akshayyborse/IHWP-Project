"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-beige">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-brown mb-4">404</h1>
        <h2 className="text-3xl font-bold text-brown mb-6">Page Not Found</h2>
        <p className="text-brown mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="bg-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}