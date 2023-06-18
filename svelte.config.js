import { vitePreprocess } from '@sveltejs/kit/vite';
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNode from '@sveltejs/adapter-node';
import dotenv from 'dotenv';
dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: process.env.DEVELOPMENT_MODE === 'false' ? adapterVercel() : adapterNode()
	}
};

export default config;
