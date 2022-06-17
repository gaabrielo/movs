const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: '#9D0208',
        success: '#01B574',

        title: '#F4F4F5',
        subtitle: '#A1A1AA',

        background: { dark: '#18181B', light: '#27272A' },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('all-inside', '& *');
    },
  ],
};
