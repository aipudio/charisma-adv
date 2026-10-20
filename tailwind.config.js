/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        // درجات اللون البترولي الفاخر المستخرج من كلمة "كاريزما"
        blue: {
          50: '#edf8fa',
          100: '#d3eef2',
          200: '#aee0e7',
          300: '#79c8d5',
          400: '#3da8bc',
          500: '#1e8ca1',
          600: '#0d5968', // لون الشعار البترولي الأساسي للأزرار والروابط
          700: '#0a4652', // لون التحويم hover
          800: '#083740',
          900: '#05252c',
          950: '#02161b',
        },
        // الخلفية البترولية الداكنة الفخمة المستخرجة من أرضية الشعار
        slate: {
          900: '#052127', // لون أقسام الـ Hero والـ CTA
          800: '#09313a',
          700: '#104652',
        },
        // اللون الذهبي الميتاليك لشعار كاريزما والأيقونات
        gold: {
          DEFAULT: '#c59b27',
          light: '#dfb743',
          dark: '#9a7516',
        }
      }
    },
  },
  plugins: [],
}
