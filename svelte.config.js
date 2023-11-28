import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/lib/components'
		}
	},
	vitePlugin: {
		inspector: true
	}
};

export default config;
