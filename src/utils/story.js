// Вспомогательные функции для stories: раскладка вариантов в ряд или сеткой
export const row = (items, { gap = 16, align = 'center', wrap = true } = {}) => {
  const el = document.createElement('div');
  el.style.cssText = `display:flex;gap:${gap}px;align-items:${align};flex-wrap:${wrap ? 'wrap' : 'nowrap'}`;
  el.append(...items);
  return el;
};

export const stack = (items, { gap = 24 } = {}) => {
  const el = document.createElement('div');
  el.style.cssText = `display:flex;flex-direction:column;gap:${gap}px`;
  el.append(...items);
  return el;
};

export const labeled = (title, node) => {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'display:grid;gap:8px';
  const cap = document.createElement('div');
  cap.textContent = title;
  cap.style.cssText = 'font:600 12px/1.4 var(--font-family-body);letter-spacing:.06em;text-transform:uppercase;color:var(--color-semantic-text-muted)';
  wrap.append(cap, node);
  return wrap;
};

export const fromHTML = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};
