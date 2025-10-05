/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F9F7F4',
        burgundy: '#8B4747',
        gold: '#B8860B',
        charcoal: '#2a2a2a',
        'text-secondary': '#5a5a5a',
        'border-soft': 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        serif: ['EB Garamond', 'Cormorant Garamond', 'Georgia', 'serif'],
        title: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'biblical': '0.15em',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '6rem',
        '2xl': '8rem',
      },
      borderRadius: {
        'soft': '4px',
        'gentle': '8px',
      },
    },
  },
  plugins: [],
}
