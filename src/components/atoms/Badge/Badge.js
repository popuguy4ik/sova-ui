import { iconSvg } from '../Icon/Icon.js';
import './Badge.css';

const ICONS = { info: 'info', success: 'circle-check', warning: 'triangle-alert', error: 'circle-x' };

/** Бейдж статуса: info | success | warning | error | neutral. Цвет дублируется иконкой. */
export const createBadge = ({ label = 'Статус', tone = 'info', icon = true } = {}) => {
  const el = document.createElement('span');
  el.className = `badge badge--${tone}`;
  el.innerHTML = `${icon && ICONS[tone] ? iconSvg(ICONS[tone], { size: 14 }) : ''}<span>${label}</span>`;
  return el;
};
