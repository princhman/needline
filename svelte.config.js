import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
  },
  kit: {
    experimental: {
      remoteFunctions: true,
    },
    adapter: adapter(),
  },
  compilerOptions: {
    experimental: {
      async: true,
    },
  },
};

export default config;
