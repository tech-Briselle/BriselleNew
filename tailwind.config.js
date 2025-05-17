/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--slds-g-color-brand-base-50, #0176d3)',
        'primary-dark': 'var(--slds-g-color-brand-base-30, #014486)',
        success: 'var(--slds-g-color-success-base-50, #2e844a)',
        warning: 'var(--slds-g-color-warning-base-50, #dd7a01)',
        error: 'var(--slds-g-color-error-base-50, #ea001e)',
        accent: 'var(--slds-g-color-brand-base-50, #0176d3)',
        stroke: 'var(--slds-g-color-border-base-1, #dddbda)',
        'stroke-dark': 'var(--slds-g-color-border-base-4, #747474)',
      },
      backgroundColor: {
        'primary-hover': 'var(--slds-g-color-brand-base-30, #014486)',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
      },
      boxShadow: {
        'card-hover': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};