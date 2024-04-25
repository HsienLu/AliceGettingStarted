/** @type {import('tailwindcss').Config} */
export default {
  content: [    
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans TC', 'PingFang TC', 'Heiti TC', 'sans-serif']
      }
    },
  },
  plugins: [],
}

