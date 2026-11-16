import { createFooter } from './Footer.js';

export default {
  title: 'Organisms/Footer',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  render: (args) => createFooter(args),
};

export const Default = { args: {} };
