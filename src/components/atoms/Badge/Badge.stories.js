import { createBadge } from './Badge.js';
import { row } from '../../../utils/story.js';

export default {
  title: 'Atoms/Badge',
  tags: ['autodocs'],
  argTypes: { tone: { control: 'inline-radio', options: ['info', 'success', 'warning', 'error', 'neutral'] } },
  render: (args) => createBadge(args),
};

export const Info = { args: { tone: 'info', label: 'Новое' } };
export const Success = { args: { tone: 'success', label: 'Доставлено' } };
export const Warning = { args: { tone: 'warning', label: 'Слабая сеть' } };
export const Error = { args: { tone: 'error', label: 'Не отправлено' } };

export const AllTones = {
  render: () => row([
    createBadge({ tone: 'info', label: 'Новое' }),
    createBadge({ tone: 'success', label: 'Доставлено' }),
    createBadge({ tone: 'warning', label: 'Слабая сеть' }),
    createBadge({ tone: 'error', label: 'Не отправлено' }),
    createBadge({ tone: 'neutral', label: 'Архив', icon: false }),
  ], { gap: 12 }),
};
