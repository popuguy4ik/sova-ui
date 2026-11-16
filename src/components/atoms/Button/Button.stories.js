import { createButton } from './Button.js';
import { iconNames } from '../Icon/Icon.js';
import { row, stack, labeled } from '../../../utils/story.js';

export default {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Основное действие на экране. Четыре варианта из спецификации плюс `accent` для главного призыва на маркетинговых страницах. Высота 40 / 48 / 56 px, фокус виден с клавиатуры.' } } },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'ghost', 'danger', 'accent'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    state: { control: { type: 'select' }, options: ['default', 'hover', 'focus', 'disabled'], description: 'Принудительное состояние для документации' },
    disabled: { control: 'boolean' },
    icon: { control: 'select', options: ['', ...iconNames] },
    iconPosition: { control: 'inline-radio', options: ['start', 'end'] },
    block: { control: 'boolean' },
  },
  render: (args) => createButton(args),
};

export const Primary = { args: { variant: 'primary', size: 'md', label: 'Скачать' } };
export const Secondary = { args: { variant: 'secondary', size: 'md', label: 'Подробнее' } };
export const Ghost = { args: { variant: 'ghost', size: 'md', label: 'Отмена' } };
export const Danger = { args: { variant: 'danger', size: 'md', label: 'Удалить чат', icon: 'trash-2' } };
export const WithIcon = { args: { variant: 'primary', size: 'md', label: 'Отправить', icon: 'send', iconPosition: 'end' } };

export const Sizes = {
  render: () => row(['sm', 'md', 'lg'].map((size) => createButton({ label: { sm: 'Small', md: 'Medium', lg: 'Large' }[size], size }))),
};

export const Disabled = { args: { variant: 'primary', size: 'md', label: 'Недоступно', disabled: true } };

export const AllStates = {
  name: 'Все варианты и состояния',
  render: () => stack(['primary', 'secondary', 'ghost', 'danger'].map((variant) =>
    labeled(variant, row(['default', 'hover', 'focus', 'disabled'].map((state) =>
      createButton({ variant, state, label: state[0].toUpperCase() + state.slice(1) })), { gap: 24 })))),
};
