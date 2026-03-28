import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f6f7f4',
          100: '#e3e7dd',
          200: '#c7d0bb',
          300: '#a4b392',
          400: '#839871',
          500: '#667b54',
          600: '#506241',
          700: '#404d35',
          800: '#363f2e',
          900: '#2f3629',
          950: '#171c14',
        },
        earth: {
          50:  '#faf8f5',
          100: '#f2ede5',
          200: '#e4d9ca',
          300: '#d2c0a8',
          400: '#bea285',
          500: '#b08c6b',
          600: '#a37a5e',
          700: '#88644f',
          800: '#6f5344',
          900: '#5b453a',
          950: '#30231d',
        },
        cream: {
          50:  '#fdfcfa',
          100: '#faf8f3',
          200: '#f5f1e8',
          300: '#ece5d7',
          400: '#ddd2be',
          500: '#cdbda3',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)',    'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia',  'serif'],
        body:    ['var(--font-lora)',      'Georgia',  'serif'],
      },
      fontWeight: {
        thin:       '100',
        extralight: '200',
        light:      '300',
        normal:     '400',
        semibold:   '600',
        bold:       '700',
        extrabold:  '800',
        black:      '900',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.02em',
        tight:    '-0.01em',
        normal:   '0',
        wide:     '0.02em',
        wider:    '0.06em',
        widest:   '0.12em',
      },
      transitionTimingFunction: {
        'expo-out':  'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in':   'cubic-bezier(0.7, 0, 0.84, 0)',
        'expo-inout':'cubic-bezier(0.87, 0, 0.13, 1)',
        'bounce-out':'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in':         'fadeIn     0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up':      'fadeInUp   0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left':   'slideInLeft  0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right':  'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in':        'scaleIn   0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blur-in':         'blurIn    0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float':           'float     6s   ease-in-out infinite',
        'pulse-soft':      'pulseSoft 3s   ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blurIn: {
          '0%':   { opacity: '0', filter: 'blur(12px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gradient-nature':  'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-mesh-hero': `
          radial-gradient(at 0% 0%,   rgba(100,123,84,0.18)  0, transparent 55%),
          radial-gradient(at 100% 0%, rgba(176,140,107,0.14) 0, transparent 55%),
          radial-gradient(at 50% 100%,rgba(100,123,84,0.10)  0, transparent 55%)
        `,
      },
      minHeight: {
        'dvh': '100dvh',
        'svh': '100svh',
      },
      boxShadow: {
        'sage-sm': '0 2px 8px -2px rgba(64,77,53,0.12)',
        'sage-md': '0 8px 24px -4px rgba(64,77,53,0.16)',
        'sage-lg': '0 20px 48px -8px rgba(64,77,53,0.20)',
        'earth-sm':'0 2px 8px -2px rgba(176,140,107,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
