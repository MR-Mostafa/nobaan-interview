import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import { resolve } from 'path';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig((config: ConfigEnv) => {
	const mode = config.mode as 'development' | 'production';
	const hasDisabledPwa = process.env.hasDisabledPwa === 'true' ? true : false;

	return {
		plugins: [
			react({
				babel: {
					babelrc: true,
				},
			}),
			VitePWA({
				registerType: 'autoUpdate',
				injectRegister: 'inline',
				useCredentials: true,
				manifestFilename: 'site.webmanifest',
				base: '/',
				disable: hasDisabledPwa,
				workbox: {
					globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
					maximumFileSizeToCacheInBytes: 3000000, // 3MiB
					skipWaiting: false,
					runtimeCaching: [
						{
							handler: 'NetworkOnly',
							urlPattern: /\/api\/.*/,
							method: 'POST',
							options: {
								backgroundSync: {
									name: 'nobaan_api',
									options: {
										maxRetentionTime: 24 * 60,
									},
								},
							},
						},
					],
				},
				devOptions: {
					enabled: mode === 'development',
				},
				includeAssets: [
					'favicon.ico',
					'apple-touch-icon.png',
					'pwa-192x192.png',
					'pwa-512x512.png',
					'safari-pinned-tab.svg',
					'mstile-150x150.png',
				],
				manifest: {
					name: 'Nobaan App',
					short_name: 'Nobaan',
					description: 'Home health care service in Tehran',
					theme_color: '#ffffff',
					background_color: '#ffffff',
					display: 'standalone',
					icons: [
						{
							src: '/pwa-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: '/pwa-512x512.png',
							sizes: '512x512',
							type: 'image/png',
						},
						{
							src: '/pwa-512x512.png',
							sizes: '512x512',
							type: 'image/png',
							purpose: 'any maskable',
						},
					],
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
	};
});
