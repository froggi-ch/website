/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald:  '#10B981',
          'emerald-dark': '#059669',
          'emerald-darker': '#047857',
          bg:       '#0F172A',
          surface:  '#111827',
          surface2: '#1F2937',
          text:     '#F9FAFB',
          muted:    '#9CA3AF',
          border:   '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
