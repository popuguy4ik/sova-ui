import { createBreadcrumbs } from './Breadcrumbs.js';

export default {
  title: 'Molecules/Breadcrumbs',
  tags: ['autodocs'],
  render: (args) => createBreadcrumbs(args),
};

export const TwoLevels = { args: { items: [{ label: 'Главная', href: '#' }, { label: 'Блог' }] } };
export const ThreeLevels = { args: { items: [{ label: 'Главная', href: '#' }, { label: 'Блог', href: '#' }, { label: 'Как устроено шифрование' }] } };
