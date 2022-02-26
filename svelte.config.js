import adapter from '@sveltejs/adapter-auto'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		sass: {
			includePaths: ['src'],
      prependData: '@import "src/global/sass/base/_variables.sass"',
      renderSync: true
		},
    postcss: {
			plugins: [
        cssnano({ preset: 'cssnano-preset-default' }),
        autoprefixer({})
      ]
		},
  }),

	kit: {
		adapter: adapter(),
    files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html',
			hooks: 'src/hooks'
		},
    vite: {
			resolve: {
				alias: {
					$stores: path.resolve('./src/lib/stores'),
					$components: path.resolve('./src/lib/components')
				}
			},
		}
	}
};

export default config;
