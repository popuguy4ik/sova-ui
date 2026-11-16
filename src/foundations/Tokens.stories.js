import '../styles/global.css';

export default {
  title: 'Foundations/Tokens',
  parameters: { docs: { description: { component: 'Все значения дизайн-системы. CSS-переменные генерируются Style Dictionary из JSON-токенов в папке `tokens/`. Переключите тему на панели сверху, и семантические цвета поменяются.' } } },
};

const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const el = (tag, style = '', html = '') => { const e = document.createElement(tag); e.style.cssText = style; e.innerHTML = html; return e; };
const mono = 'font:12px/1.4 var(--font-family-mono);color:var(--color-semantic-text-muted)';
const title = (t) => el('h3', 'margin:24px 0 12px;font-size:18px', t);

const swatch = (label, varName) => {
  const card = el('div', 'display:grid;gap:6px;width:132px');
  const box = el('div', `height:72px;border-radius:12px;background:var(${varName});border:1px solid var(--color-semantic-border-default)`);
  card.append(box, el('div', 'font:600 13px var(--font-family-body)', label), el('code', mono, varName));
  requestAnimationFrame(() => card.append(el('code', mono, css(varName))));
  return card;
};

export const Colors = {
  render: () => {
    const wrap = el('div');
    const groups = {
      'Фон': ['background-default', 'background-alt', 'background-surface', 'background-night', 'background-inverse'],
      'Текст': ['text-default', 'text-muted', 'text-placeholder', 'text-link', 'text-on-action'],
      'Границы и фокус': ['border-default', 'border-strong', 'border-focus'],
      'Действия': ['action-primary', 'action-primary-hover', 'action-primary-soft', 'action-secondary', 'action-accent', 'action-danger'],
      'Статусы': ['feedback-info', 'feedback-success', 'feedback-warning', 'feedback-error', 'feedback-success-bg', 'feedback-error-bg'],
    };
    Object.entries(groups).forEach(([g, list]) => {
      wrap.append(title('Семантические: ' + g));
      const row = el('div', 'display:flex;flex-wrap:wrap;gap:16px');
      list.forEach((n) => row.append(swatch(n, `--color-semantic-${n}`)));
      wrap.append(row);
    });
    return wrap;
  },
};

export const Primitives = {
  render: () => {
    const wrap = el('div');
    const P = { indigo: [100, 300, 600, 700, 800], violet: [300, 500], amber: [100, 400, 500, 700, 900], green: [100, 400, 700, 900], red: [100, 400, 600, 700, 900], gray: [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 975] };
    Object.entries(P).forEach(([hue, steps]) => {
      wrap.append(title(hue));
      const row = el('div', 'display:flex;flex-wrap:wrap;gap:12px');
      steps.forEach((s) => row.append(swatch(`${hue}-${s}`, `--color-primitive-${hue}-${s}`)));
      wrap.append(row);
    });
    return wrap;
  },
};

export const Typography = {
  render: () => {
    const wrap = el('div', 'display:grid;gap:4px');
    [['5xl', 'display', 'black'], ['4xl', 'display', 'black'], ['3xl', 'display', 'bold'], ['2xl', 'display', 'bold'], ['xl', 'display', 'bold'], ['lg', 'body', 'regular'], ['base', 'body', 'regular'], ['sm', 'body', 'regular'], ['xs', 'body', 'semibold']].forEach(([s, f, w]) => {
      const row = el('div', 'display:grid;grid-template-columns:220px 1fr;align-items:baseline;gap:24px;padding:10px 0;border-bottom:1px solid var(--color-semantic-border-default)');
      row.append(el('code', mono, `--font-size-${s}<br>--font-family-${f}<br>--font-weight-${w}`));
      row.append(el('div', `font-family:var(--font-family-${f});font-size:var(--font-size-${s});font-weight:var(--font-weight-${w});line-height:1.2`, 'Сова хранит секреты'));
      wrap.append(row);
    });
    return wrap;
  },
};

export const Spacing = {
  render: () => {
    const wrap = el('div', 'display:grid;gap:12px');
    [1, 2, 3, 4, 6, 8, 12, 16, 24].forEach((n) => {
      const row = el('div', 'display:flex;align-items:center;gap:16px');
      row.append(el('code', mono + ';width:80px', `space-${n}`), el('div', `height:16px;width:var(--space-${n});border-radius:4px;background:var(--color-semantic-action-primary)`), el('small', mono, `var(--space-${n}) = ${css('--space-' + n)}`));
      wrap.append(row);
    });
    return wrap;
  },
};

export const RadiusAndShadows = {
  name: 'Radius & Shadows',
  render: () => {
    const wrap = el('div');
    wrap.append(title('Радиусы'));
    const r = el('div', 'display:flex;gap:24px;flex-wrap:wrap');
    ['sm', 'md', 'lg', 'xl', 'pill'].forEach((n) => { const c = el('div', 'display:grid;gap:8px;justify-items:center'); c.append(el('div', `width:80px;height:80px;border-radius:var(--radius-${n});background:var(--color-semantic-action-primary-soft);border:2px solid var(--color-semantic-action-primary)`), el('code', mono, `radius-${n}`)); r.append(c); });
    wrap.append(r, title('Тени'));
    const s = el('div', 'display:flex;gap:32px;flex-wrap:wrap;padding:8px 0 24px');
    ['sm', 'md', 'lg', 'xl'].forEach((n) => { const c = el('div', 'display:grid;gap:12px;justify-items:center'); c.append(el('div', `width:140px;height:96px;border-radius:16px;background:var(--color-semantic-background-surface);box-shadow:var(--shadow-${n})`), el('code', mono, `shadow-${n}`)); s.append(c); });
    wrap.append(s);
    return wrap;
  },
};

export const Motion = {
  render: () => {
    const wrap = el('div', 'display:grid;gap:16px');
    wrap.append(el('p', 'margin:0;color:var(--color-semantic-text-muted)', 'Наведите на дорожку: шарик проедет с нужной длительностью и кривой <code>--motion-easing-standard</code>.'));
    ['fast', 'base', 'slow'].forEach((n) => {
      const row = el('div', 'display:flex;align-items:center;gap:16px');
      const track = el('div', 'position:relative;width:320px;height:32px;border-radius:999px;background:var(--color-semantic-background-alt)');
      const dot = el('div', `position:absolute;top:4px;left:4px;width:24px;height:24px;border-radius:999px;background:var(--color-semantic-action-primary);transition:transform var(--motion-duration-${n}) var(--motion-easing-standard)`);
      track.append(dot);
      track.addEventListener('mouseenter', () => { dot.style.transform = 'translateX(288px)'; });
      track.addEventListener('mouseleave', () => { dot.style.transform = ''; });
      row.append(el('code', mono + ';width:200px', `--motion-duration-${n}`), track, el('small', mono, css('--motion-duration-' + n)));
      wrap.append(row);
    });
    return wrap;
  },
};
