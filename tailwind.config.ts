import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			fontFamily: {
				space: ['var(--font-space-grotesk)']
			},
			colors: {
				primary: '#7CD2D7'
			},
			zIndex: {
				'-1': '-1'
			},
			transformOrigin: {
				'0': '0%'
			}
		}
	},
	plugins: []
}
export default config
