import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
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
				"inner-bottom" : "inset 0 -25px 30px -12px rgb(0 0 0 / 0.25)" 
			},
			colors : {
				"background" : "white"
			}
		}
	},

	plugins: []
} satisfies Config;
