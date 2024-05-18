/* eslint-disable @typescript-eslint/naming-convention */
import react from '@vitejs/plugin-react-swc';
import { type ManualChunksOption } from 'rollup';
import { visualizer } from 'rollup-plugin-visualizer';
import {
	type ConfigEnv,
	defineConfig,
	type ProxyOptions,
	splitVendorChunkPlugin,
	type UserConfig,
} from 'vite';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(
	(env: ConfigEnv): UserConfig => ({
		build: {
			rollupOptions: {
				output: {
					manualChunks: manualChunksOptions,
				},
			},
		},
		plugins: [react(), splitVendorChunkPlugin(), visualizer()],
		server: {
			proxy: proxyOptions(env),
		},
	}),
);

const proxyOptions = ({ mode }: ConfigEnv): Record<string, ProxyOptions> => {
	if (mode === 'live') {
		return {
			'/api/v0': {
				changeOrigin: true,
				secure: false,
				target: 'https://laszloborbely.com',
			},
			'/static': {
				changeOrigin: true,
				secure: false,
				target: 'https://laszloborbely.com',
			},
		};
	}

	return {
		'/api/v0': {
			changeOrigin: true,
			target: 'http://localhost:8080',
		},
	};
};

const manualChunksOptions: ManualChunksOption = (id: string) => {
	if (id.includes('moment')) {
		return 'moment';
	}
};
