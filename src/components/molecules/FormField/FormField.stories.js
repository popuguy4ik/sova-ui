import { createFormField } from './FormField.js';
import { stack } from '../../../utils/story.js';

export default {
  title: 'Molecules/FormField',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Label + Input + helper text + error. Ошибка и подсказка связаны с полем через `aria-describedby`.' } } },
  argTypes: { type: { control: 'inline-radio', options: ['text', 'email', 'password', 'textarea'] } },
  render: (args) => createFormField(args),
};

export const Default = { args: { label: 'Имя', placeholder: 'Как к вам обращаться' } };
export const WithHelper = { args: { label: 'Пароль', type: 'password', helper: 'Минимум 8 символов, буквы и цифры', required: true } };
export const WithError = { args: { label: 'Почта', type: 'email', value: 'ilya@mail', error: 'Проверьте адрес, например: name@mail.ru', required: true } };
export const Disabled = { args: { label: 'Номер телефона', value: '+7 900 000-00-00', helper: 'Номер можно сменить только в приложении', disabled: true } };

export const Overview = {
  render: () => stack([
    createFormField({ label: 'Имя', placeholder: 'Как к вам обращаться' }),
    createFormField({ label: 'Почта', type: 'email', value: 'ilya@mail', error: 'Проверьте адрес, например: name@mail.ru', required: true }),
    createFormField({ label: 'Пароль', type: 'password', helper: 'Минимум 8 символов', required: true }),
  ]),
};
