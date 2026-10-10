/** @type {import('tailwindcss').Config} */
// The palette is the app's (corev2 web/src/styles.css), which is derived from
// the frog mark: a desaturated sage family, hue ~140. Keep the two in step.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: '#436b4e',
          'accent-dark': '#244733',
          sage: '#a2cdab',
          soft: '#eaf5ee',
          ink: '#15231b',
          bg: '#f6f9f7',
          surface: '#ffffff',
          text: '#15231b',
          muted: '#617567',
          border: '#e4ece7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        window: '0 1px 2px rgba(21,35,27,0.04), 0 12px 40px -8px rgba(21,35,27,0.14)',
      },
    },
  },
};
