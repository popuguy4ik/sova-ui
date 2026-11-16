import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Sova UI',
    brandUrl: '#',
    brandImage: './static/logo-wordmark.svg',
    colorPrimary: '#4F46E5',
    colorSecondary: '#4F46E5',
    fontBase: '"Inter", system-ui, sans-serif',
  }),
});
