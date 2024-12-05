import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        tablet: { max: '916px' },
      },
      fontFamily: {
        meb: ['Monument-Extended-Bold', 'sans-serif'],
        mer: ['Monument-Extended-Regular', 'sans-serif'],
        mel: ['Monument-Extended-Light', 'sans-serif'],
        meul: ['Monument-Extended-UltraLight', 'sans-serif'],
        prata: ['Prata', 'serif'],
        monl: ['Montserrat-Light', 'sans-serif'],
        dmsans: ['DMSans-Regular', 'serif'],
        ad: ['Adine-Kirnberg', 'sans-serif'],
        sacra: ['Sacramento-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
