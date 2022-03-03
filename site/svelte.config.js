import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$utils: path.resolve('./src/utils'),
					$components: path.resolve('./src/components'),
					$css: path.resolve('./src/css'),
				}
			}
		}
	},
	experimental: {
		useViteProcess: true
	}
};

export default config;
