import adapter from '@sveltejs/adapter-auto'
import vercel from '@sveltejs/adapter-vercel'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { resolve } from 'path'
import preprocess from 'svelte-preprocess'
import { directives } from './directives.config.js'

const rootDomain = process.env["VITE_DOMAIN"]
const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		sass: {
			includePaths: ['src'],
      prependData: '@import "src/lib/sass/main.sass"',
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
		adapter: dev ? adapter() : vercel(),
    csp: {
			mode: 'auto',
			directives: directives(dev, rootDomain)
    },
    files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html',
			hooks: 'src/hooks'
		},
    floc: dev,
    vite: {
			resolve: {
				alias: {
          $lib: resolve('src/lib'),
					$stores: resolve('./src/lib/stores'),
          $types: resolve('src/lib/types'),
					$components: resolve('./src/lib/components')
				}
			},
		}
	}
}

export default config
