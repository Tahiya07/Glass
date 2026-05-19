import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--app-font-family)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#a5b4fc',
        },
        acid: '#bef264',
        neon: '#d946ef',
        surface: {
          DEFAULT: 'var(--bg-surface)',
          dark: '#0f0f11',
          light: '#f8fafc',
        },
        card: {
          DEFAULT: 'var(--bg-card)',
          dark: '#18181b',
          light: '#ffffff',
        },
        theme: {
          text: 'var(--text-main)',
          sub: 'var(--text-sub)',
          border: 'var(--border-color)',
          element: 'var(--element-bg)',
          hover: 'var(--element-hover)',
          input: 'var(--input-bg)',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('dusk', 'html.dusk &');
    }),
  ],
};
