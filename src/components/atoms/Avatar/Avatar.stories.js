import { createAvatar } from './Avatar.js';
import { row } from '../../../utils/story.js';

export default {
  title: 'Atoms/Avatar',
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'inline-radio', options: ['indigo', 'violet', 'amber', 'night'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  render: (args) => createAvatar(args),
};

export const Default = { args: { initials: 'ЕС', name: 'Екатерина Соколова', color: 'night', size: 'md' } };
export const Online = { args: { initials: 'АФ', name: 'Анна Филина', color: 'violet', size: 'md', online: true } };

export const Sizes = { render: () => row(['sm', 'md', 'lg'].map((size) => createAvatar({ initials: 'МГ', color: 'amber', size }))) };
export const Colors = { render: () => row(['indigo', 'violet', 'amber', 'night'].map((color) => createAvatar({ initials: 'ДО', color, online: color === 'indigo' }))) };
