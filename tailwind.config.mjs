/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'jersey-m54': ['Jersey M54', 'sans-serif'],
				'geist': ['Geist', 'sans-serif'],
			},
			colors: {
				'crows-red': '#52102d',
				'crows-red-hover': '#7a1a48',
			},
		},
	},
	plugins: [],
}
