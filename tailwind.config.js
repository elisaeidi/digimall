/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': { "min": '360px', "max": "1365px" },
      // 'tablet': { "min": '640px', "max": "1365px" },
      'laptop': { "min": '1366', "max": "1279" },
      'laptop': { "min": '1280' }
    },
    extend: {  
      backgroundImage: {  
        'custom-image': "url('/images/wellcomePage.jpg')",  
      }  
    } 
  },
  plugins: [],
};
