"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface DoshaResult {
  vata: number;
  pitta: number;
  kapha: number;
}

interface DoshaInfo {
  name: string;
  element: string;
  qualities: string[];
  traits: string[];
  balanceTips: {
    diet: string[];
    lifestyle: string[];
  };
}

const doshaDetails: Record<string, DoshaInfo> = {
  Vata: {
    name: "Vata (Air + Ether)",
    element: "Air + Ether",
    qualities: ["Light", "Cold", "Dry", "Rough", "Mobile", "Subtle", "Clear"],
    traits: [
      "Creative and imaginative",
      "Quick thinking and learning",
      "Energetic and active",
      "Flexible and adaptable",
      "Light build with prominent joints",
      "Irregular appetite and digestion"
    ],
    balanceTips: {
      diet: [
        "Warm, cooked, and nourishing foods",
        "Sweet, sour, and salty tastes",
        "Ghee, oils, and healthy fats",
        "Warm drinks and soups"
      ],
      lifestyle: [
        "Maintain regular routines",
        "Practice grounding activities like walking",
        "Get adequate rest and sleep",
        "Stay warm and avoid cold, dry environments"
      ]
    }
  },
  Pitta: {
    name: "Pitta (Fire + Water)",
    element: "Fire + Water",
    qualities: ["Hot", "Sharp", "Light", "Oily", "Liquid", "Mobile"],
    traits: [
      "Intelligent and focused",
      "Strong digestion and metabolism",
      "Leadership qualities",
      "Perfectionist tendencies",
      "Medium build with good muscle tone",
      "Sensitive skin that tans easily"
    ],
    balanceTips: {
      diet: [
        "Cool, fresh, and dry foods",
        "Sweet, bitter, and astringent tastes",
        "Avoid spicy, sour, and salty foods",
        "Cucumber, melons, and leafy greens"
      ],
      lifestyle: [
        "Avoid excessive heat and sun exposure",
        "Practice cooling activities like swimming",
        "Cultivate calm and patience",
        "Engage in moderate exercise"
      ]
    }
  },
  Kapha: {
    name: "Kapha (Earth + Water)",
    element: "Earth + Water",
    qualities: ["Heavy", "Slow", "Cool", "Oily", "Smooth", "Dense", "Soft", "Stable"],
    traits: [
      "Calm and grounded disposition",
      "Strong immunity and stamina",
      "Loyal and compassionate",
      "Steady and methodical approach",
      "Sturdy build with solid bones",
      "Slow but consistent digestion"
    ],
    balanceTips: {
      diet: [
        "Light, warm, and dry foods",
        "Pungent, bitter, and astringent tastes",
        "Avoid heavy, oily, and sweet foods",
        "Spices like ginger, black pepper, and turmeric"
      ],
      lifestyle: [
        "Maintain regular exercise routine",
        "Avoid oversleeping",
        "Seek new experiences and challenges",
        "Keep environment clean and clutter-free"
      ]
    }
  }
};

export default function ResultPage() {
  const router = useRouter();
  const [results, setResults] = useState<DoshaResult | null>(null);
  const [dominantDosha, setDominantDosha] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve results from localStorage
    const storedResults = localStorage.getItem("prakritiResults");
    if (storedResults) {
      const parsedResults: DoshaResult = JSON.parse(storedResults);
      setResults(parsedResults);
      
      // Determine dominant dosha
      const { vata, pitta, kapha } = parsedResults;
      const maxScore = Math.max(vata, pitta, kapha);
      
      if (maxScore === vata && maxScore === pitta && maxScore === kapha) {
        setDominantDosha("Vata-Pitta-Kapha");
      } else if (maxScore === vata && maxScore === pitta) {
        setDominantDosha("Vata-Pitta");
      } else if (maxScore === pitta && maxScore === kapha) {
        setDominantDosha("Pitta-Kapha");
      } else if (maxScore === vata && maxScore === kapha) {
        setDominantDosha("Vata-Kapha");
      } else if (maxScore === vata) {
        setDominantDosha("Vata");
      } else if (maxScore === pitta) {
        setDominantDosha("Pitta");
      } else if (maxScore === kapha) {
        setDominantDosha("Kapha");
      }
    } else {
      // If no results found, redirect to quiz
      router.push("/quiz");
    }
  }, [router]);

  const handleRetakeTest = () => {
    localStorage.removeItem("prakritiResults");
    router.push("/quiz");
  };

  if (!results || !dominantDosha) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige">
        <div className="text-center">
          <p className="text-brown text-lg">Loading your results...</p>
        </div>
      </div>
    );
  }

  const doshaInfo = doshaDetails[dominantDosha.split("-")[0]] || doshaDetails.Vata;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-beige">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brown mb-2">Your Prakriti Results</h1>
          <p className="text-brown">Discover your unique constitution</p>
        </div>

        {/* Results card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-green mb-2">{dominantDosha} Dominant</h2>
            <p className="text-brown italic">{doshaInfo.element}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-brown mb-3">Characteristics</h3>
            <ul className="list-disc pl-5 space-y-2">
              {doshaInfo.traits.map((trait, index) => (
                <li key={index} className="text-brown">{trait}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-brown mb-3">Balancing Tips</h3>
            
            <div className="mb-4">
              <h4 className="font-medium text-brown mb-2">Diet:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {doshaInfo.balanceTips.diet.map((tip, index) => (
                  <li key={index} className="text-brown">{tip}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-brown mb-2">Lifestyle:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {doshaInfo.balanceTips.lifestyle.map((tip, index) => (
                  <li key={index} className="text-brown">{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-brown mb-3">Your Scores</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-beige p-4 rounded-lg text-center">
                <p className="font-bold text-brown">Vata</p>
                <p className="text-2xl font-bold text-green">{results.vata}</p>
              </div>
              <div className="bg-beige p-4 rounded-lg text-center">
                <p className="font-bold text-brown">Pitta</p>
                <p className="text-2xl font-bold text-green">{results.pitta}</p>
              </div>
              <div className="bg-beige p-4 rounded-lg text-center">
                <p className="font-bold text-brown">Kapha</p>
                <p className="text-2xl font-bold text-green">{results.kapha}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleRetakeTest}
            className="bg-green hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Retake Test
          </button>
        </div>
      </div>
    </div>
  );
}