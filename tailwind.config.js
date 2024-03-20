
import defaultTheme  from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontSize: {
      'header': '28pt',
      'body': '10.5pt',
    },
    extend: {
      fontFamily: {
        // add Helvetica Neue
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        'A4': '8.5in',
      },
      maxHeight: {
        'A4': '11in',
      },
      height: {
        'A4': '11in',
      },
      colors: {
        'bg': '#fafafc',
        'font': '#1e1e2e',
        'fun': '#0800a4',
        'link': '#1616df',
        'link-hover': '#000079'
      },
      boxShadow: {
        'page': '0px 4px 8px 0px rgba(0, 0, 0, 0.03), 0px 0px 4px 0px rgba(0, 0, 0, 0.02)',
        'hover': 'rgba(2, 2, 131, 0.15) 0px 30px 90px',
      },
      gap: {
        '1.5': '6px'
      },
      transitionTimingFunction: {'in-out-expo': 'cubic-bezier(0.09, 0.33, 0, 0.99)'},
    },
  },
  plugins: []
};