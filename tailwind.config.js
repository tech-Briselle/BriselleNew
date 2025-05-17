/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // SLDS color tokens
        brand: 'var(--slds-g-color-brand-base-50, #0176d3)',
        'brand-dark': 'var(--slds-g-color-brand-base-30, #014486)',
        success: 'var(--slds-g-color-success-base-50, #2e844a)',
        warning: 'var(--slds-g-color-warning-base-50, #dd7a01)',
        error: 'var(--slds-g-color-error-base-50, #ea001e)',
        neutral: {
          50: 'var(--slds-g-color-neutral-base-95, #f3f3f3)',
          100: 'var(--slds-g-color-neutral-base-90, #e5e5e5)',
          200: 'var(--slds-g-color-neutral-base-80, #c9c9c9)',
          300: 'var(--slds-g-color-neutral-base-70, #aeaeae)',
          400: 'var(--slds-g-color-neutral-base-50, #747474)',
          500: 'var(--slds-g-color-neutral-base-30, #444444)',
          600: 'var(--slds-g-color-neutral-base-10, #181818)',
        }
      },
      spacing: {
        'xx-small': 'var(--slds-spacing-xx-small)',
        'x-small': 'var(--slds-spacing-x-small)',
        small: 'var(--slds-spacing-small)',
        medium: 'var(--slds-spacing-medium)',
        large: 'var(--slds-spacing-large)',
        'x-large': 'var(--slds-spacing-x-large)',
        'xx-large': 'var(--slds-spacing-xx-large)',
      },
      borderRadius: {
        DEFAULT: 'var(--slds-border-radius-medium)',
        small: 'var(--slds-border-radius-small)',
        large: 'var(--slds-border-radius-large)',
        circle: 'var(--slds-border-radius-circle)',
      },
      boxShadow: {
        small: 'var(--slds-shadow-drop-small)',
        medium: 'var(--slds-shadow-drop-medium)',
        large: 'var(--slds-shadow-drop-large)',
      },
      fontFamily: {
        sans: ['Salesforce Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};