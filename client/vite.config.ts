/* eslint-disable @typescript-eslint/naming-convention */
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api/blog': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api\/blog/, ''),
			},
		},
	},
});
