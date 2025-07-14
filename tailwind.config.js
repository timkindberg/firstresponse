/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        firefighter: {
          red: '#dc2626',
          'red-dark': '#991b1b',
          'red-darker': '#7f1d1d',
          'red-light': '#ef4444',
          'red-lighter': '#fecaca',
          black: '#0f0f0f',
          'black-light': '#1f1f1f',
          'black-lighter': '#2f2f2f',
          gray: '#374151',
          'gray-light': '#6b7280',
          'gray-lighter': '#9ca3af',
        },
        emergency: {
          yellow: '#fbbf24',
          orange: '#f97316',
          amber: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-fire': 'linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%)',
        'gradient-smoke': 'linear-gradient(135deg, #0f0f0f 0%, #1f1f1f 50%, #374151 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(15,15,15,0.95) 0%, rgba(220,38,38,0.1) 50%, rgba(15,15,15,0.95) 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(31,31,31,0.8) 0%, rgba(47,47,47,0.4) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'fire': '0 25px 50px -12px rgba(220, 38, 38, 0.25)',
        'fire-lg': '0 20px 40px -10px rgba(220, 38, 38, 0.4)',
        'dark': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 30px rgba(220, 38, 38, 0.3)',
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        'emergency': '0 10px 30px -5px rgba(251, 191, 36, 0.4)',
        'emergency-lg': '0 20px 40px -10px rgba(251, 191, 36, 0.6)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-left': 'fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-right': 'fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 10px 30px -5px rgba(251, 191, 36, 0.4)' },
          '50%': { boxShadow: '0 10px 30px -5px rgba(251, 191, 36, 0.8)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
} 