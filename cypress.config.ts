import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		port: 8080,
		supportFile: false,
		baseUrl: 'http://localhost:4173',
	},
});
