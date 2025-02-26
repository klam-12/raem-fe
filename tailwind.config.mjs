/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nutino:['Nunito Sans','serif'], 
      },
      fontSize: {
        displayXs_bold: ["24px", { fontWeight: 'bold' }], 
        displayXs_medium: ["24px", { fontWeight: 500 }],
        displayXs_regular: ["24px", { fontWeight: 400 }],

        textMd_regular: ["16px", { fontWeight: 400 }],
        textMd_medium: ["16px", { fontWeight: 500 }],
        textMd_semiBold: ["16px", { fontWeight: 600 }],
        textMd_bold: ["16px", { fontWeight: 700 }],
        
      },
      colors: {
        primary: '#0036B5',
        black: '#0F0F0F',
        white: '#FDFDFD',
        background: '#0C111D',
        textColor: '#393E46',
        grey: {
          50: '#f4f4f4',
          100: '#dedede',
          200: '#cecece',
          300: '#b7b7b7',
          400: '#a9a9a9',
          500: '#949494',
          600: '#878787',
          700: '#696969',
          800: '#515151',
          900: '#3e3e3e',
        },
        blue: {
          50: '#E6EBF8',
          100: '#B0C1E8',
          200: '#8AA3DD',
          300: '#5478CD',
          400: '#335EC4',
          500: '#0036B5',
          600: '#0031A5',
          700: '#002681',
          800: '#001E64',
          900: '#00174C',
        },
      },
    },
  },
  plugins: [],
};
