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
			}
		}
	},

	plugins: []
} satisfies Config;
