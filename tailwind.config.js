/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b1220',
        navy: '#16233d',
        'navy-soft': '#1d2c4a',
        crimson: '#a11d2e',
        'crimson-bright': '#c92a3f',
        gold: '#b8912f',
        'gold-bright': '#d4af52',
        parchment: '#faf6ec',
        'parchment-dim': '#efe8d8',
        ash: '#5b5f66',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        site: '1180px',
      },
      borderRadius: {
        brand: '4px',
      },
      animation: {
        'load-fill': 'loadFill 1.8s ease forwards',
        'route-fade': 'routeFade 0.35s ease',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        loadFill: {
          to: { width: '100%' },
        },
        routeFade: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
