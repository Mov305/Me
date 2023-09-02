/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/(pages)/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class
  theme: {},
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
};
