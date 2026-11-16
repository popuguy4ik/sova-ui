/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.js'],
  addons: ['@storybook/addon-docs'],
  framework: { name: '@storybook/html-vite', options: {} },
  staticDirs: [{ from: '../src/assets', to: '/static' }],
  core: { disableTelemetry: true },
};
export default config;
