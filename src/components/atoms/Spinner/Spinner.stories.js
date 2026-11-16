import { createSpinner } from './Spinner.js';
import { createButton } from '../Button/Button.js';
import { row } from '../../../utils/story.js';

export default {
  title: 'Atoms/Spinner',
  tags: ['autodocs'],
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] } },
  render: (args) => createSpinner(args),
};

export const Default = { args: { size: 'md', label: 'Загрузка чатов' } };
export const Sizes = { render: () => row(['sm', 'md', 'lg'].map((size) => createSpinner({ size }))) };

export const InButton = {
  name: 'В кнопке',
  render: () => {
    const btn = createButton({ label: 'Отправляем', disabled: true });
    const sp = createSpinner({ size: 'sm' });
    sp.style.color = 'inherit';
    btn.prepend(sp);
    return btn;
  },
};
