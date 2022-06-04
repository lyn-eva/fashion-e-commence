module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { 'green-tea': '#435c50', 'green-tea-dense': '#2a4236' },
      backgroundImage: {
        accessories: "url('/assets/accessories.jpg')",
        men: "url('/assets/men.jpg')",
        women: "url('/assets/women.jpg')",
        youth: "url('/assets/youth.jpg')",
      },
    },
  },
  plugins: [],
};
