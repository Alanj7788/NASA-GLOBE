const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
    flowbite.content(),
  ],
  
  theme: {
    extend: {
      
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add or adjust breakpoints here
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}