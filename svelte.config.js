import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(), // Use the Vercel adapter
    // Additional configuration (optional)
  },
};

export default config;
