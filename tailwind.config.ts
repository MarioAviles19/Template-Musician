import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			maxWidth:{
				"clamp-lg" : "60rem",
				"clamp-md" : "40rem",
				"clamp-sm" : "30rem"
			}
		}
	},

	plugins: []
} satisfies Config;
