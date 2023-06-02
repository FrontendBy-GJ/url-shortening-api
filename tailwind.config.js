/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: {
          cyan: 'hsl(180, 66%, 49%)',
          violet: 'hsl(257, 27%, 26%)',
        },
        Secondary: {
          red: 'hsl(0, 87%, 67%)',
        },
        Neutral: {
          gray: 'hsl(0, 0%, 75%)',
          grayViolet: 'hsl(257, 7%, 63%)',
          darkBlue: 'hsl(255, 11%, 22%)',
          darkViolet: 'hsl(260, 8%, 14%)',
        },
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
