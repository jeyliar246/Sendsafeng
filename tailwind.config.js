/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff00ff',
        'neon-green': '#00ff9d',
        'dark-purple': '#9d00ff',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(157, 0, 255, 0.5)',
        'neon-strong': '0 0 30px rgba(255, 0, 255, 0.7)',
        'neon-green': '0 0 20px rgba(0, 255, 157, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};