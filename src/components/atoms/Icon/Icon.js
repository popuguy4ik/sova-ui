import { icons } from './icons.js';
import './Icon.css';

export const iconNames = Object.keys(icons);

// Разметка SVG-иконки: декоративная (aria-hidden) или с подписью для скринридера
export const iconSvg = (name, { size = 24, label = '' } = {}) => {
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"';
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" ${a11y}>${icons[name] || ''}</svg>`;
};

export const createIcon = ({ name = 'star', size = 24, label = '' } = {}) => {
  const t = document.createElement('template');
  t.innerHTML = iconSvg(name, { size, label });
  return t.content.firstElementChild;
};
