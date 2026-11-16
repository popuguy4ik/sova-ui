import { createPagination } from './Pagination.js';

export default {
  title: 'Molecules/Pagination',
  tags: ['autodocs'],
  argTypes: { current: { control: { type: 'number', min: 1 } }, total: { control: { type: 'number', min: 1 } } },
  render: (args) => createPagination(args),
};

export const FewPages = { args: { current: 1, total: 3 } };
export const ManyPages = { args: { current: 6, total: 12 } };
export const LastPage = { args: { current: 12, total: 12 } };
