import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			width:{
				"clamp-lg" : "60rem",
				"clamp-md" : "40rem",
				"clamp-sm" : "30rem"
			},
			minWidth:{
				"clamp-lg" : "60rem",
				"clamp-md" : "40rem",
				"clamp-sm" : "30rem"
			},
			maxWidth:{
				"clamp-lg" : "60rem",
				"clamp-md" : "40rem",
				"clamp-sm" : "30rem"
			},
			gridColumn : {
				"first" : "1/2"
			},
			gridRow : {
				"first" : "1/2"
			},
			boxShadow : {
				"inner-bottom" : "inset 0 -25px 30px -12px rgb(0 0 0 / 0.25)",
				"3xl" : "0 25px 50px -10px rgb(0 0 0 / 0.35)"
			},
			colors : {
				"background" : "var(--color-background)",
				"soft-black" : "var(--color-soft-black)",
				"glass-400" : "var(--color-glass-harder)",
				"glass-300" : "var(--color-glass-hard)",
				"glass-200" : "var(--color-glass-medium)",
				"glass-100" : "var(--color-glass-soft)"
			},
			backgroundImage : {
				"hero" : "url('tramk.jpg')"
			}
		}
	},

	plugins: []
} satisfies Config;
