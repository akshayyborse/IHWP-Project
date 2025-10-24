export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    type: "Vata" | "Pitta" | "Kapha";
  }[];
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What best describes your skin type?",
    options: [
      { text: "Dry and rough", type: "Vata" },
      { text: "Oily and warm", type: "Pitta" },
      { text: "Smooth and moist", type: "Kapha" }
    ]
  },
  {
    id: 2,
    question: "How would you describe your body frame?",
    options: [
      { text: "Light and thin", type: "Vata" },
      { text: "Medium build", type: "Pitta" },
      { text: "Sturdy and heavy", type: "Kapha" }
    ]
  },
  {
    id: 3,
    question: "What is your typical body temperature?",
    options: [
      { text: "Cool hands and feet", type: "Vata" },
      { text: "Warm body temperature", type: "Pitta" },
      { text: "Steady and moderate", type: "Kapha" }
    ]
  },
  {
    id: 4,
    question: "How do you handle stress?",
    options: [
      { text: "Anxious and worried", type: "Vata" },
      { text: "Irritable and intense", type: "Pitta" },
      { text: "Calm and steady", type: "Kapha" }
    ]
  },
  {
    id: 5,
    question: "What is your sleep pattern like?",
    options: [
      { text: "Light sleeper, often wake up", type: "Vata" },
      { text: "Moderate sleep, sometimes vivid dreams", type: "Pitta" },
      { text: "Deep and prolonged sleep", type: "Kapha" }
    ]
  },
  {
    id: 6,
    question: "What is your appetite like?",
    options: [
      { text: "Variable, sometimes no appetite", type: "Vata" },
      { text: "Strong, get irritable when hungry", type: "Pitta" },
      { text: "Steady, can skip meals", type: "Kapha" }
    ]
  },
  {
    id: 7,
    question: "What is your energy level like throughout the day?",
    options: [
      { text: "Bursts of energy, then fatigue", type: "Vata" },
      { text: "Consistent, intense energy", type: "Pitta" },
      { text: "Steady, slow to get going", type: "Kapha" }
    ]
  },
  {
    id: 8,
    question: "How would you describe your personality?",
    options: [
      { text: "Creative and spontaneous", type: "Vata" },
      { text: "Focused and determined", type: "Pitta" },
      { text: "Calm and loyal", type: "Kapha" }
    ]
  },
  {
    id: 9,
    question: "What weather do you prefer?",
    options: [
      { text: "Warm and humid", type: "Vata" },
      { text: "Cool and dry", type: "Pitta" },
      { text: "Cool and damp", type: "Kapha" }
    ]
  },
  {
    id: 10,
    question: "How do you approach learning?",
    options: [
      { text: "Quick to learn, quick to forget", type: "Vata" },
      { text: "Sharp understanding", type: "Pitta" },
      { text: "Slow and steady", type: "Kapha" }
    ]
  }
];