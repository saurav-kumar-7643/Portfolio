/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelLavender: '#e6e6fa',
        pastelPurple: '#cdb4f6',
        pastelPink: '#ffe0f7',
        pastelBlue: '#e0f2ff',
        pastelGreen: '#e6f9f7',
      },
      boxShadow: {
        soft: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
        softLg: '0 15px 45px 0 rgba(31, 38, 135, 0.15)',
      },
      animation: {
        blob1: 'blob1 10s infinite',
        blob2: 'blob2 8s infinite',
        blob3: 'blob3 14s infinite',
        float: 'float 6s ease-in-out infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
      },
      keyframes: {
        blob1: {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(40px) translateX(40px)' },
        },
        blob2: {
          '0%,100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-40px) translateY(-20px)' },
        },
        blob3: {
          '0%,100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-50px) translateY(20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}