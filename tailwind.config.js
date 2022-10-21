/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: 'hsl(216, 98%, 52%)',
        primaryDark: 'hsl(216, 98%, 20%)',
        primaryLight: 'hsl(216, 98%, 60%)',
        secondary: 'hsl(208, 7%, 46%)',
        secondaryDark: 'hsl(208, 7%, 35%)',
        secondaryLight: 'hsl(208, 7%, 60%)',
        warning: 'hsl(45, 100%, 51%)',
        warningDark: 'hsl(45, 100%, 40%)',
        warningLight: 'hsl(45, 100%, 60%)',
        danger: 'hsl(354, 70%, 54%)',
        dangerDark: 'hsl(354, 70%, 40%)',
        dangerLight: 'hsl(354, 70%, 65%)',
        info: 'hsl(190, 90%, 50%)',
        infoDark: 'hsl(190, 90%, 40%)',
        infoLight: 'hsl(190, 90%, 60%)',
        success: 'hsl(152, 69%, 31%)',
        successDark: 'hsl(152, 69%, 21%)',
        successLight: 'hsl(152, 69%, 41%)',
        dark: '#212529',
        darkLight: '#212529',
        light: '#f8f9fa',
      },
    },
  },
  plugins: [],
}
