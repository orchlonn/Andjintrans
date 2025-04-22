module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
      fontFamily:{
        cursive:'cursive'
      },
    
    extend: {
      height: (theme) => ({
        ...theme.height,
        service:"25vh",
        cover: "50vh",
        slider: "calc(100vh - 104px)",
        booking: "calc(100vh - 136px - 90px)",
      }),

    },
  },
  plugins: [],
}