import { createTooltip } from './Tooltip.js';
import { createButton } from '../../atoms/Button/Button.js';
import { createIcon } from '../../atoms/Icon/Icon.js';
import { row } from '../../../utils/story.js';

export default {
  title: 'Molecules/Tooltip',
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'Подсказка появляется при наведении и при фокусе с клавиатуры, Esc ее скрывает.' } } },
  argTypes: { placement: { control: 'inline-radio', options: ['top', 'bottom', 'right'] }, open: { control: 'boolean' } },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.padding = '64px 120px';
    wrap.append(createTooltip({ ...args, trigger: createButton({ label: 'Код безопасности', variant: 'secondary', size: 'sm' }) }));
    return wrap;
  },
};

export const Top = { args: { text: 'Сравните 60 цифр с кодом на телефоне собеседника', placement: 'top', open: true } };
export const Bottom = { args: { text: 'Сообщение доставлено', placement: 'bottom', open: true } };

export const OnIconButton = {
  name: 'На кнопке-иконке',
  render: () => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn--ghost btn--sm';
    btn.setAttribute('aria-label', 'Настройки');
    btn.append(createIcon({ name: 'settings', size: 20 }));
    const wrap = document.createElement('div');
    wrap.style.padding = '48px';
    wrap.append(row([createTooltip({ text: 'Настройки чата', trigger: btn, placement: 'right', open: true })]));
    return wrap;
  },
};
