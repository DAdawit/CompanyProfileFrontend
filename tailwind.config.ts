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
        // Primary Palette (Default)
        'primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'secondary': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'accent': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },

        // Nature Palette
        'nature': {
          primary: '#2D5A27',     // Forest Green
          secondary: '#8B4513',   // Saddle Brown
          accent: '#DAA520',      // Golden Rod
          light: '#F4F1DE',       // Cream
          dark: '#1B4332',        // Dark Forest
        },

        // Ocean Palette
        'ocean': {
          primary: '#003D5B',     // Deep Ocean Blue
          secondary: '#00798C',   // Teal
          accent: '#F7B538',      // Sunny Yellow
          light: '#E8F1F2',       // Sea Foam
          dark: '#001B2E',        // Night Ocean
        },
      },
    },
  },
  plugins: [],
}

export default config 