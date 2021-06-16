import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		//target: '#svelte'
		appDir: 'app',
		paths: {
			// site root on GitHub Pages
			assets: '/mpw'
		},
		adapter: adapter({
			pages: 'gh-pages',
			assets: 'gh-pages',
			fallback: null
		})
	}
};

export default config;
