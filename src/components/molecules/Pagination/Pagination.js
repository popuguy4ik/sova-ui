import { iconSvg } from '../../atoms/Icon/Icon.js';
import './Pagination.css';

// Номера страниц с многоточием: 1 … 4 5 6 … 12
const pages = (current, total) => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set([1, total, current, current - 1, current + 1]);
  const list = [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out = [];
  list.forEach((n, i) => { if (i && n - list[i - 1] > 1) out.push('…'); out.push(n); });
  return out;
};

/** Пагинация. Клик меняет текущую страницу и вызывает onChange. */
export const createPagination = ({ current = 1, total = 5, label = 'Страницы', onChange } = {}) => {
  const nav = document.createElement('nav');
  nav.className = 'pagination';
  nav.setAttribute('aria-label', label);
  const render = () => {
    const items = pages(current, total).map((p) => p === '…'
      ? '<li><span class="pagination__gap" aria-hidden="true">…</span></li>'
      : `<li><button type="button" class="pagination__item" data-page="${p}" ${p === current ? 'aria-current="page"' : ''} aria-label="Страница ${p}">${p}</button></li>`).join('');
    nav.innerHTML = `<ul>
      <li><button type="button" class="pagination__item" data-page="${current - 1}" aria-label="Предыдущая страница" ${current === 1 ? 'disabled' : ''}>${iconSvg('chevron-left', { size: 20 })}</button></li>
      ${items}
      <li><button type="button" class="pagination__item" data-page="${current + 1}" aria-label="Следующая страница" ${current === total ? 'disabled' : ''}>${iconSvg('chevron-right', { size: 20 })}</button></li>
    </ul>`;
  };
  nav.addEventListener('click', (e) => {
    const b = e.target.closest('[data-page]');
    if (!b || b.disabled) return;
    current = Number(b.dataset.page);
    render();
    nav.querySelector(`[data-page="${current}"][aria-current]`)?.focus();
    onChange && onChange(current);
  });
  render();
  return nav;
};
