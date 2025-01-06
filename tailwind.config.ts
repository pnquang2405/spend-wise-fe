import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '1/10': '10%',
        '1/8': '12.5%',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        system: '#03193A',
        green: '#01AF70',
        gray: '#90A2BD',
        'primary-2': '#12294A',
        'primary-3': '#3555FF',
        'primary-4': '#1A3157',
        grey: '#F5F9FF0D',
      },
    },
  },
  plugins: [],
} satisfies Config
