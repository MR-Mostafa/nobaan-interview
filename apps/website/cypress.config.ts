import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		port: 8081,
		supportFile: false,
		baseUrl: 'http://localhost:8080',
	},
});
