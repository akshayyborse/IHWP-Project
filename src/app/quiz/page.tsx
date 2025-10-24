"use client";

import { useState } from "react";
import { quizData } from "@/data/quizData";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();
  const [vata, setVata] = useState(0);
  const [pitta, setPitta] = useState(0);
  const [kapha, setKapha] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (type: "Vata" | "Pitta" | "Kapha") => {
    // Update the dosha score based on the answer
    let newVata = vata;
    let newPitta = pitta;
    let newKapha = kapha;
    
    if (type === "Vata") newVata += 1;
    if (type === "Pitta") newPitta += 1;
    if (type === "Kapha") newKapha += 1;

    // Move to the next question or finish the quiz
    if (currentQuestion < quizData.length - 1) {
      setVata(newVata);
      setPitta(newPitta);
      setKapha(newKapha);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished, save results to localStorage and navigate to results
      const results = { 
        vata: newVata, 
        pitta: newPitta, 
        kapha: newKapha 
      };
      
      localStorage.setItem("prakritiResults", JSON.stringify(results));
      router.push("/result");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-beige">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brown mb-2">Prakriti Quiz</h1>
          <p className="text-brown">Question {currentQuestion + 1} of {quizData.length}</p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
          <div 
            className="bg-green h-4 rounded-full transition-all duration-500 ease-in-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-brown mb-6 text-center">
            {quizData[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.type as "Vata" | "Pitta" | "Kapha")}
                className="w-full py-4 px-6 bg-beige hover:bg-golden text-brown font-medium rounded-lg transition duration-300 ease-in-out transform hover:scale-105 border border-golden"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`py-2 px-6 rounded-lg font-medium ${
              currentQuestion === 0 
                ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                : "bg-brown text-white hover:bg-opacity-90"
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={() => {
              // For the last question, we handle this in handleAnswer
              if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
              }
            }}
            disabled={currentQuestion === quizData.length - 1}
            className={`py-2 px-6 rounded-lg font-medium ${
              currentQuestion === quizData.length - 1 
                ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                : "bg-green text-white hover:bg-opacity-90"
            }`}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}