module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'dark': '#0D1B2A',
      'md-dark': '#1B263B',
      'main': '#415A77',
      'md-light': '#778DA9',
      'light': '#E0E1DD',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
    },
    container: {
      center: true,
    },
    fontSize: {
      'xl': '2rem',
      'lg': '1.5rem',
      'md': '1.25rem',
      'sm': '1rem',
      'xs': '0.75rem',
    },
    extend: {
      spacing: {
        'xl': '36rem',
        'lg': '24rem',
        'md': '18rem',
        'sm': '12rem',
        'xs': '6rem',
    },
    borderRadius: {
      'xl': '1rem',
      'lg': '0.75rem',
      'md': '0.5rem',
      'sm': '0.25rem',
      'xs': '0.125rem',
    },
    boxShadow: {
      'xl': '0 0 1rem rgba(0, 0, 0, 0.5)',
      'lg': '0 0 0.75rem rgba(0, 0, 0, 0.5)',
      'md': '0 0 0.5rem rgba(0, 0, 0, 0.5)',
      'sm': '0 0 0.25rem rgba(0, 0, 0, 0.5)',
      'xs': '0 0 0.125rem rgba(0, 0, 0, 0.5)',
    },
    padding: {
      'xl': '1rem',
      'lg': '0.75rem',
      'md': '0.5rem',
      'sm': '0.25rem',
      'xs': '0.125rem',
    },
    margin: {
      'xl': '1rem',
      'lg': '0.75rem',
      'md': '0.5rem',
      'sm': '0.25rem',
      'xs': '0.125rem',
    }
  },
},
  plugins: [],
};