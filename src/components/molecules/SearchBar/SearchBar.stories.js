import { createSearchBar } from './SearchBar.js';

export default {
  title: 'Molecules/SearchBar',
  tags: ['autodocs'],
  render: (args) => createSearchBar({ ...args, onSearch: (q) => console.log('search', q) }),
};

export const Default = { args: { placeholder: 'Поиск по чатам', showButton: true } };
export const WithValue = { args: { placeholder: 'Поиск по чатам', value: 'фото с дачи', showButton: true } };
export const Compact = { args: { placeholder: 'Поиск', showButton: false } };
