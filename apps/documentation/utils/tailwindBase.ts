export const TAILWIND_BASE = `module.exports = {
    content: [
      "./App.js",
      "/node_modules/naldama-ui/dist/index.js",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
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
@tailwind utilities;

::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
`;
