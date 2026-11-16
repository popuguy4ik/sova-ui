import { createRadio, createRadioGroup } from './Radio.js';

export default {
  title: 'Atoms/Radio',
  tags: ['autodocs'],
  render: (args) => createRadio(args),
};

export const Default = { args: { label: 'Все', name: 'demo' } };
export const Checked = { args: { label: 'Все', name: 'demo2', checked: true } };
export const Disabled = { args: { label: 'Никто', name: 'demo3', disabled: true } };

export const Group = {
  args: { legend: 'Кто видит мой номер', name: 'privacy', options: ['Все', 'Мои контакты', 'Никто'], value: 'Мои контакты' },
  render: (args) => createRadioGroup(args),
};
