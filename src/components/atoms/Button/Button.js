import { iconSvg } from '../Icon/Icon.js';
import './Button.css';

/**
 * Кнопка. variant: primary | secondary | ghost | danger | accent; size: sm | md | lg.
 * state нужен только для документации: показывает hover и focus без наведения мыши.
 */
export const createButton = ({
  label = 'Кнопка',
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = '',
  iconPosition = 'start',
  block = false,
  type = 'button',
  state = 'default',
} = {}) => {
  const btn = document.createElement('button');
  btn.type = type;
  btn.className = [
    'btn', `btn--${variant}`, `btn--${size}`,
    block ? 'btn--block' : '',
    state === 'hover' ? 'is-hover' : '',
    state === 'focus' ? 'is-focus' : '',
  ].filter(Boolean).join(' ');
  const ic = icon ? iconSvg(icon, { size: size === 'lg' ? 20 : 18 }) : '';
  btn.innerHTML = iconPosition === 'end' ? `<span>${label}</span>${ic}` : `${ic}<span>${label}</span>`;
  btn.disabled = disabled || state === 'disabled';
  return btn;
};
