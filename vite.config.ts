/* eslint-disable @typescript-eslint/naming-convention */
import react from '@vitejs/plugin-react-swc';
import {type ManualChunksOption} from 'rollup';
import {visualizer} from 'rollup-plugin-visualizer';
import {type ConfigEnv, defineConfig, type ProxyOptions, splitVendorChunkPlugin, type UserConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv): UserConfig => ({
	plugins: [react(), splitVendorChunkPlugin(), visualizer()],
	server: {
		proxy: proxyOptions(env),
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: manualChunksOptions,
			},
		},
	},
}));

const proxyOptions = ({mode}: ConfigEnv): Record<string, ProxyOptions> => {
	if (mode === 'live') {
		return {
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
		};
	}

	return {
		'/api/blog': {
			target: 'http://localhost:8080',
			changeOrigin: true,
			rewrite: path => path.replace(/^\/api\/blog/, ''),
		},
	};
};

const manualChunksOptions: ManualChunksOption = (id: string) => {
	if (id.includes('moment')) {
		return 'moment';
	}

	if (id.includes('refractor')) {
		return 'refractor';
	}
};
