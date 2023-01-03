import { defineConfig } from 'vite';

import { resolve } from 'path';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				babelrc: true,
			},
		}),
	],
	envDir: resolve(__dirname, 'src', 'env'),
	envPrefix: 'GB_',
	resolve: {
		alias: {
			'~src': resolve(__dirname, 'src'),
			'~assets': resolve(__dirname, 'src', 'assets'),
			'~components': resolve(__dirname, 'src', 'components'),
			'~constants': resolve(__dirname, 'src', 'constants'),
			'~hooks': resolve(__dirname, 'src', 'hooks'),
			'~pages': resolve(__dirname, 'src', 'pages'),
			'~services': resolve(__dirname, 'src', 'services'),
			'~types': resolve(__dirname, 'src', 'types'),
		},
	},
});
