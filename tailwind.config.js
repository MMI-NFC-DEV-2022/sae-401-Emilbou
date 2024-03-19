/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {


    
    extend: {

 colors: {
  "noir": "#0e0e0e",
  "blanc": "#ffffff",
  "orange": "#f5c754"
 },
 fontSize: {
  "sm": "0.8125rem",
  "base": "1rem",
  "lg": "1.25rem",
  "xl": "1.5rem",
  "2xl": "1.5625rem",
  "3xl": "1.875rem"
 },
 fontFamily: {
  "spline-sans": "Spline Sans"
 },
 borderRadius: {
  "none": "0",
  "xs": "0.125rem",
  "sm": "0.3125rem",
  "default": "0.375rem",
  "lg": "0.5rem",
  "xl": "0.625rem",
  "2xl": "0.75rem",
  "3xl": "1rem",
  "4xl": "1.25rem",
  "5xl": "4rem"
 
},
      Heading1mobile: {
"color": "#055421",

/* Heading 1 mobile */
"font-family": "Spline Sans",
"font-size": "25px",
"font-style": "normal",
"font-weight": "600",
"line-height": "normal",
      },

    }
  },
  plugins: [
require("daisyui"),],

  
}
