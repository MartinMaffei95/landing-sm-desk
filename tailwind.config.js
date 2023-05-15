/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        w98: 'SansNouveaux',
      },
      fontSize: {
        'text-xs': ' 0.55rem',
        'text-sm': ' 0.75rem',
        'text-base': ' 0.875rem',
        'text-lg': ' 1rem',
        'text-xl': ' 1.125rem',
        'text-2xl': ' 1.25rem',
        'text-3xl': ' 1.5rem',
        'text-4xl': ' 1.875rem',
        'text-5xl': ' 2.25rem',
        'text-6xl': ' 3rem',
        'text-7xl': ' 3.75rem',
        'text-8xl': ' 4.5rem',
        'text-9xl': ' 6rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [],
};

//FontSize Default:
//  'text-xs': ' 0.75rem',
//   'text-sm': ' 0.875rem',
//   'text-base': ' 1rem',
//   'text-lg': ' 1.125rem',
//   'text-xl': ' 1.25rem',
//   'text-2xl': ' 1.5rem',
//   'text-3xl': ' 1.875rem',
//   'text-4xl': ' 2.25rem',
//   'text-5xl': ' 3rem',
//   'text-6xl': ' 3.75rem',
//   'text-7xl': ' 4.5rem',
//   'text-8xl': ' 6rem',
//   'text-9xl': ' 8rem',
