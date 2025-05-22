/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background-start-rgb))',
        foreground: 'rgb(var(--foreground-rgb))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-delay': 'fadeIn 0.5s ease-in-out 0.2s forwards',
        'grow-height': 'growHeight 0.5s ease-out forwards',
        'pulse': 'pulse 2s infinite',
        'darken': 'darken 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        growHeight: {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        darken: {
          '0%': { opacity: '0.3', background: 'linear-gradient(to bottom, #D1D5DB, #D1D5DB)' },
          '100%': { opacity: '1', background: 'linear-gradient(to bottom, #D1D5DB, #111827)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dot-pattern': 'radial-gradient(#e5e7eb 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '16px 16px',
      },
    },
  },
  plugins: [],
} 