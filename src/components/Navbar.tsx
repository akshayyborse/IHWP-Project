"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-brown text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-2 sm:mb-0">
          My Prakriti Check 🌿
        </Link>
        
        <div className="flex space-x-4">
          <Link 
            href="/" 
            className={`hover:text-golden transition ${pathname === '/' ? 'text-golden font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/quiz" 
            className={`hover:text-golden transition ${pathname === '/quiz' ? 'text-golden font-bold' : ''}`}
          >
            Quiz
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-golden transition ${pathname === '/about' ? 'text-golden font-bold' : ''}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}