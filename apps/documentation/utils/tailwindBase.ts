export const TAILWIND_BASE = `module.exports = {
    content: [
      "./App.js",
      "../../node_modules/naldama-ui/**/*.{js,ts,jsx,tsx}",
      "../../node_modules/naldama-ui/dist/index.js",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };`;

export const POSTCSS_CONFIG = `
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
}`;

export const BASE_STYLE = `
@tailwind base;
@tailwind components;
@tailwind utilities;`;
