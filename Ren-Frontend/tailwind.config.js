/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        particle: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--tx), var(--ty))' },
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 7s ease-in-out infinite',
        'float-fast': 'float 8s ease-in-out infinite',
        'particle': 'particle 8s infinite linear',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(66, 153, 225, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(66, 153, 225, 0.1) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
};