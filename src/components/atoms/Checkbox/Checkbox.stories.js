import { createCheckbox } from './Checkbox.js';
import { stack } from '../../../utils/story.js';

export default {
  title: 'Atoms/Checkbox',
  tags: ['autodocs'],
  argTypes: { state: { control: 'select', options: ['default', 'focus', 'disabled'] } },
  render: (args) => createCheckbox(args),
};

export const Unchecked = { args: { label: 'Показывать превью сообщений' } };
export const Checked = { args: { label: 'Показывать превью сообщений', checked: true } };
export const Indeterminate = { args: { label: 'Выбрать все чаты', indeterminate: true } };
export const Disabled = { args: { label: 'Синхронизация контактов', checked: true, disabled: true } };

export const States = {
  render: () => stack([
    createCheckbox({ label: 'Не выбран' }),
    createCheckbox({ label: 'Выбран', checked: true }),
    createCheckbox({ label: 'Частично', indeterminate: true }),
    createCheckbox({ label: 'В фокусе', state: 'focus' }),
    createCheckbox({ label: 'Недоступен', disabled: true }),
  ], { gap: 12 }),
};
