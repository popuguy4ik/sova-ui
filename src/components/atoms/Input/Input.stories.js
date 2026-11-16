import { createInput } from './Input.js';
import { row, stack, labeled } from '../../../utils/story.js';

export default {
  title: 'Atoms/Input',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Однострочное поле ввода. Подпись и сообщение об ошибке добавляет молекула FormField.' } } },
  argTypes: {
    type: { control: 'inline-radio', options: ['text', 'email', 'password', 'textarea'] },
    state: { control: 'select', options: ['default', 'hover', 'focus', 'disabled'] },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  render: (args) => createInput(args),
};

export const Text = { args: { type: 'text', placeholder: 'Как к вам обращаться' } };
export const Email = { args: { type: 'email', placeholder: 'name@mail.ru' } };
export const Password = { args: { type: 'password', placeholder: 'Пароль', value: 'sova-2026' } };
export const Textarea = { args: { type: 'textarea', placeholder: 'Опишите вопрос, чем подробнее, тем лучше' } };
export const Invalid = { args: { type: 'email', value: 'ilya@mail', invalid: true } };
export const Disabled = { args: { type: 'text', placeholder: 'Недоступно', disabled: true } };

export const States = {
  render: () => stack(['default', 'hover', 'focus', 'disabled'].map((state) =>
    labeled(state, createInput({ type: 'email', placeholder: 'name@mail.ru', state }))).concat([labeled('invalid', createInput({ type: 'email', value: 'ilya@mail', invalid: true }))]), { gap: 16 }),
};
