/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e40af',
          dark: '#0f172a',
          accent: '#f59e0b',
          muted: '#64748b'
        }
      }
    },
  },
  plugins: [],
}
