"use client";

import Link from "next/link";

export default function AboutPage() {
  const elements = [
    {
      name: "Air (Vayu)",
      description: "Movement and dryness",
      dosha: "Vata",
      qualities: ["Light", "Mobile", "Subtle", "Dry"]
    },
    {
      name: "Ether (Akasha)",
      description: "Space and lightness",
      dosha: "Vata",
      qualities: ["Empty", "Subtle", "Light", "Porous"]
    },
    {
      name: "Fire (Tejas)",
      description: "Heat and transformation",
      dosha: "Pitta",
      qualities: ["Hot", "Sharp", "Light", "Oily"]
    },
    {
      name: "Water (Jala)",
      description: "Coolness and fluidity",
      dosha: "Kapha",
      qualities: ["Cool", "Liquid", "Soft", "Dense"]
    },
    {
      name: "Earth (Prithvi)",
      description: "Stability and structure",
      dosha: "Kapha",
      qualities: ["Heavy", "Slow", "Stable", "Dense"]
    }
  ];

  const doshas = [
    {
      name: "Vata",
      elements: ["Air", "Ether"],
      qualities: ["Light", "Cold", "Dry", "Rough", "Mobile", "Subtle", "Clear"]
    },
    {
      name: "Pitta",
      elements: ["Fire", "Water"],
      qualities: ["Hot", "Sharp", "Light", "Oily", "Liquid", "Mobile"]
    },
    {
      name: "Kapha",
      elements: ["Earth", "Water"],
      qualities: ["Heavy", "Slow", "Cool", "Oily", "Smooth", "Dense", "Soft", "Stable"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-beige">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brown mb-2">About Ayurveda</h1>
          <p className="text-brown">Understanding the Five Elements and Three Doshas</p>
        </div>

        {/* Elements section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-brown mb-6 text-center">The Five Elements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {elements.map((element, index) => (
              <div key={index} className="border border-golden rounded-lg p-4">
                <h3 className="text-xl font-semibold text-brown mb-2">{element.name}</h3>
                <p className="text-brown mb-2">{element.description}</p>
                <p className="text-green font-medium">Associated Dosha: {element.dosha}</p>
                <div className="mt-3">
                  <p className="text-brown font-medium mb-1">Qualities:</p>
                  <div className="flex flex-wrap gap-2">
                    {element.qualities.map((quality, idx) => (
                      <span key={idx} className="bg-beige text-brown text-sm px-2 py-1 rounded">
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doshas section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-brown mb-6 text-center">The Three Doshas</h2>
          
          <div className="space-y-6">
            {doshas.map((dosha, index) => (
              <div key={index} className="border border-golden rounded-lg p-4">
                <h3 className="text-xl font-semibold text-brown mb-2">{dosha.name}</h3>
                <p className="text-brown mb-2">
                  Composed of: {dosha.elements.join(" and ")}
                </p>
                <div>
                  <p className="text-brown font-medium mb-1">Qualities:</p>
                  <div className="flex flex-wrap gap-2">
                    {dosha.qualities.map((quality, idx) => (
                      <span key={idx} className="bg-beige text-brown text-sm px-2 py-1 rounded">
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/"
            className="bg-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}