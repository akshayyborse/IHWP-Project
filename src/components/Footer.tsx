export default function Footer() {
  return (
    <footer className="bg-brown text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">My Prakriti Check 🌿 - Discover your Ayurvedic body constitution</p>
        <p className="text-golden text-sm">
          This tool provides educational information only and is not a substitute for professional medical advice.
        </p>
        <div className="mt-4 text-golden text-sm">
          © {new Date().getFullYear()} My Prakriti Check. All rights reserved.
        </div>
      </div>
    </footer>
  );
}