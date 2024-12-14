/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#D5B803', // Gold accent
          dark: '#B89B02',
          light: '#E6CA1A'
        },
        // Military greens
        military: {
          DEFAULT: '#4E5A3C', // Olive drab
          dark: '#2C331F',
          light: '#6B7850',
          sage: '#8F9779',
          forest: '#3B4429',
          camo: '#515844'
        },
        // Earth tones
        earth: {
          DEFAULT: '#928E72', // Khaki
          dark: '#655E52',
          light: '#BEB8A2',
          sand: '#D6C6B3',
          brown: '#594A3C',
          tan: '#C5B7A3'
        },
        // Tactical colors
        tactical: {
          DEFAULT: '#181715', // Dark background
          dark: '#0F0E0D',
          light: '#242220',
          gray: '#363636',
          charcoal: '#2A2A2A',
          steel: '#4A4A4A'
        },
        // Accent colors
        accent: {
          red: '#BF1D40', // Military red
          blue: '#1D2951', // Navy blue
          gold: '#D5B803', // Metallic gold
          silver: '#C0C0C0', // Metallic silver
          bronze: '#CD7F32' // Bronze medal
        }
      },
      fontFamily: {
        tactical: ['Industry', 'Roboto Condensed', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-sweep': 'radar-sweep 4s linear infinite',
        'military-scan': 'military-scan 8s linear infinite',
        'target-lock': 'target-lock 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards',
      },
      backgroundImage: {
        'tactical-grid': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0RTVBM0MiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')",
      },
      gradients: {
        'military': 'linear-gradient(to right, var(--tw-colors-military-dark), var(--tw-colors-military-light))',
        'tactical': 'linear-gradient(to bottom, var(--tw-colors-tactical-dark), var(--tw-colors-tactical-light))',
        'accent': 'linear-gradient(to right, var(--tw-colors-accent-gold), var(--tw-colors-military-DEFAULT))'
      }
    },
  },
  plugins: [],
};