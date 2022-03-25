module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '1rem',
        xs:'0rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
    extend: {
      colors: {
        primary: '#db2777',
        secondary:'#c026d3',
        black_light:'#404040',
        black_trans:'#4040407a',
      }
    },
  },
  plugins: [],
}
