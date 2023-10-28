/* eslint-disable @typescript-eslint/naming-convention */
import react from '@vitejs/plugin-react-swc';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
	switch (mode) {
		case 'live':
			return {
				plugins: [react()],
				server: {
					proxy: {
						'/api/blog': {
							target: 'https://laszloborbely.com',
							changeOrigin: true,
							secure: false,
						},
					},
				},
			};
		default:
			return {
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
			};
	}
});
