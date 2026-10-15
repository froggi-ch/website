/** @type {import('tailwindcss').Config} */
// The palette, tones, type and radii are the app's (corev2 web/src/styles.css),
// which is derived from the frog mark: a desaturated sage family, hue ~140.
// Keep the two in step — the mockups only read as the product if they match.
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
          danger: '#dc2626',
        },
        // The app's icon tones (.tone-*): a pale tile with its deep glyph.
        tone: {
          'green-bg': '#e4f0e8', green: '#2f6b45',
          'amber-bg': '#fbeedb', amber: '#97590c',
          'red-bg': '#fbe6e6', red: '#b23434',
          'blue-bg': '#e6edf8', blue: '#2f5b9c',
          'violet-bg': '#ece7f8', violet: '#57459c',
          'slate-bg': '#ecefed', slate: '#4c5a51',
          'yellow-bg': '#fdf3d5', yellow: '#8a6a11',
        },
      },
      fontFamily: {
        // The app sets no web font; the site uses the same stack so the two
        // look like one product.
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        rail: '16px',
      },
      boxShadow: {
        window: '0 1px 2px rgba(21,35,27,0.04), 0 12px 40px -8px rgba(21,35,27,0.14)',
        lift: '0 1px 2px rgba(21,35,27,0.04), 0 4px 14px -4px rgba(21,35,27,0.10)',
        glow: '0 6px 20px -6px rgba(67,107,78,0.55)',
      },
    },
  },
};
