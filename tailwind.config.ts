import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F2F2F2',
        'button-primary': '#cf1e35',
        'button-text-color': '#FFFFFF',
        'button-hovered': '#b80018',
        'login-text-color': '#2C3A4C',
        
      },
      borderRadius: {
        'input-field': '0.75rem'
      }
    },
  },
  plugins: [],
}
export default config
