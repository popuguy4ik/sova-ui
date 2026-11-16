import { createIcon, iconNames } from './Icon.js';

export default {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Иконки Lucide, 24×24, обводка 2 px. Цвет берется из `currentColor`, поэтому иконка красится вместе с текстом.' } } },
  argTypes: {
    name: { control: 'select', options: iconNames },
    size: { control: { type: 'select' }, options: [16, 20, 24, 32] },
    label: { control: 'text', description: 'Подпись для скринридера; пустая строка делает иконку декоративной' },
  },
  render: (args) => createIcon(args),
};

export const Default = { args: { name: 'shield-check', size: 24, label: '' } };

export const Sizes = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:24px;align-items:end;color:var(--color-semantic-action-primary)';
    [16, 20, 24, 32].forEach((s) => wrap.append(createIcon({ name: 'shield-check', size: s })));
    return wrap;
  },
};

export const Gallery = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:12px';
    iconNames.forEach((n) => {
      const cell = document.createElement('div');
      cell.style.cssText = 'display:grid;justify-items:center;gap:6px;padding:12px;border:1px solid var(--color-semantic-border-default);border-radius:12px;font:12px var(--font-family-body);color:var(--color-semantic-text-muted)';
      cell.append(createIcon({ name: n }), n);
      cell.firstChild.style.color = 'var(--color-semantic-text-default)';
      wrap.append(cell);
    });
    return wrap;
  },
};
