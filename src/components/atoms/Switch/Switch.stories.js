import { createSwitch } from './Switch.js';
import { stack } from '../../../utils/story.js';

export default {
  title: 'Atoms/Switch',
  tags: ['autodocs'],
  argTypes: { state: { control: 'select', options: ['default', 'focus', 'disabled'] } },
  render: (args) => createSwitch(args),
};

export const Off = { args: { label: 'Исчезающие сообщения' } };
export const On = { args: { label: 'Исчезающие сообщения', checked: true } };
export const Disabled = { args: { label: 'Резервная копия', disabled: true } };

export const Settings = {
  name: 'Список настроек',
  render: () => {
    const list = stack([
      createSwitch({ label: 'Уведомления', checked: true }),
      createSwitch({ label: 'Звук сообщений', checked: true }),
      createSwitch({ label: 'Исчезающие сообщения' }),
      createSwitch({ label: 'В фокусе', state: 'focus' }),
      createSwitch({ label: 'Резервная копия в облаке', disabled: true }),
    ], { gap: 16 });
    list.style.maxWidth = '360px';
    list.querySelectorAll('.switch').forEach((s) => { s.style.display = 'flex'; });
    return list;
  },
};
