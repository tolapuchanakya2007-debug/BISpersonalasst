/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dbe6f3',
          200: '#b8cce6',
          300: '#8aa9d2',
          400: '#5680ba',
          500: '#345f9c',
          600: '#284d80',
          700: '#1f3d66',
          800: '#152a4a',
          900: '#0d1b33',
          950: '#070f20',
        },
        saffron: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc170',
          400: '#ff9d3c',
          500: '#ff8417',
          600: '#f0670a',
          700: '#c74d0b',
          800: '#9e3d11',
          900: '#7f3312',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(13,27,51,0.06), 0 1px 2px -1px rgba(13,27,51,0.06)',
        'card-hover': '0 8px 24px -4px rgba(13,27,51,0.12), 0 4px 8px -4px rgba(13,27,51,0.08)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-fast': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'fade-in-fast': 'fade-in-fast 0.2s ease-out both',
        'pulse-dot': 'pulse-dot 1.2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
