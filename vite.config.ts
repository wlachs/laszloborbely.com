/* eslint-disable @typescript-eslint/naming-convention */
import react from '@vitejs/plugin-react-swc';
import {type ConfigEnv, defineConfig, type UserConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}: ConfigEnv): UserConfig => {
	if (mode === 'live') {
		return {
			plugins: [react()],
			server: {
				proxy: {
					'/api/blog': {
						target: 'https://laszloborbely.com',
						changeOrigin: true,
						secure: false,
					},
					'/static': {
						target: 'https://laszloborbely.com',
						changeOrigin: true,
						secure: false,
					},
				},
			},
		};
	}

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
});
