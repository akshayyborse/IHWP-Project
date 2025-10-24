import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#FAF3E0',
        green: '#A3BE8C',
        golden: '#D4A373',
        brown: '#5C4033',
      },
    },
  },
  plugins: [],
}
export default config