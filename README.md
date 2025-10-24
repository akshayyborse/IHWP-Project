# Prakriti Check 🌿

Discover your Ayurvedic body constitution with this interactive quiz application.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## About

Prakriti Check is a Next.js web application that helps users discover their Ayurvedic body constitution (Prakriti). In Ayurveda, Prakriti refers to an individual's unique combination of the three doshas - Vata, Pitta, and Kapha - which are derived from the five elements (Air, Ether, Fire, Water, Earth).

Understanding your Prakriti can help you make informed choices about diet, lifestyle, and wellness practices that are best suited for your natural constitution.

## Features

- Interactive 10-question quiz to determine your dominant dosha(s)
- Detailed explanation of the three doshas and five elements
- Personalized results showing your dosha scores
- Balancing tips for diet and lifestyle based on your constitution
- Responsive design that works on all devices
- Clean, nature-inspired UI with calming colors

## Technology Stack

- [Next.js 14](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd prakriti-check
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
prakriti-check/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── about/           # About page explaining Ayurveda
│   │   ├── quiz/            # Interactive quiz page
│   │   ├── result/          # Results display page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── Footer.tsx       # Footer component
│   └── data/                # Static data
│       └── quizData.ts      # Quiz questions and answers
├── public/                  # Static assets
├── .gitignore               # Git ignore file
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## How It Works

1. **Home Page**: Users are introduced to the concept of Prakriti and can start the quiz or learn more about Ayurveda.

2. **Quiz Page**: Users answer 10 questions about their physical and mental characteristics. Each answer contributes to one of the three dosha scores (Vata, Pitta, or Kapha).

3. **Results Page**: After completing the quiz, users receive their personalized results showing:
   - Their dominant dosha(s)
   - Characteristics of their constitution
   - Balancing tips for diet and lifestyle
   - Individual dosha scores

4. **About Page**: Provides educational content about the five elements and three doshas in Ayurveda.

The application uses localStorage to store quiz results temporarily and calculates the dominant dosha based on the highest scoring dosha(s).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Akshay Borse** - [GitHub](https://github.com/akshayyborse)

Created with ❤️ for wellness and self-discovery.