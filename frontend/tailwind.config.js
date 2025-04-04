/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#481E14',
        hoverColor: '#002673',
      },
      keyframes: {
        waveAnim: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(2px, 2px) rotate(1deg)' },
        },
      },
      animation: {
        waveAnim: 'waveAnim 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
