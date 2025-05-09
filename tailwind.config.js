/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        body: 'rgb(var(--color-body) / <alpha-value>)',
        bodydark: 'rgb(var(--color-bodydark) / <alpha-value>)',
        bodydark1: 'rgb(var(--color-bodydark1) / <alpha-value>)',
        bodydark2: 'rgb(var(--color-bodydark2) / <alpha-value>)',
        stroke: 'rgb(var(--color-stroke) / <alpha-value>)',
        strokedark: 'rgb(var(--color-strokedark) / <alpha-value>)',
        meta1: 'rgb(var(--color-meta1) / <alpha-value>)',
        meta2: 'rgb(var(--color-meta2) / <alpha-value>)',
        meta3: 'rgb(var(--color-meta3) / <alpha-value>)',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '10.5': '2.625rem',
      },
      boxShadow: {
        default: '0px 1px 3px 0px rgba(0, 0, 0, 0.08)',
        card: '0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        'card-hover': '0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      },
    },
  },
  plugins: [],
};