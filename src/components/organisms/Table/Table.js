import { iconSvg } from '../../atoms/Icon/Icon.js';
import { createBadge } from '../../atoms/Badge/Badge.js';
import './Table.css';

/**
 * Таблица с сортировкой по клику на заголовок. columns: [{ key, label, sortable, align, badge }].
 * Значение колонки с badge: [текст, tone].
 */
export const createTable = ({ caption = '', columns = [], rows = [], striped = false } = {}) => {
  const wrap = document.createElement('div');
  wrap.className = 'table-wrap';
  let sort = { key: null, dir: 1 };
  const render = () => {
    const data = [...rows];
    if (sort.key) data.sort((a, b) => String(a[sort.key]).localeCompare(String(b[sort.key]), 'ru', { numeric: true }) * sort.dir);
    wrap.innerHTML = `<table class="table${striped ? ' table--striped' : ''}">
      ${caption ? `<caption>${caption}</caption>` : ''}
      <thead><tr>${columns.map((c) => {
        const s = sort.key === c.key ? (sort.dir === 1 ? 'ascending' : 'descending') : 'none';
        return `<th scope="col" class="${c.align === 'end' ? 'is-end' : ''}" ${c.sortable ? `aria-sort="${s}"` : ''}>${c.sortable
          ? `<button type="button" data-key="${c.key}">${c.label}${iconSvg(s === 'none' ? 'arrow-up-down' : s === 'ascending' ? 'chevron-up' : 'chevron-down', { size: 16 })}</button>` : c.label}</th>`;
      }).join('')}</tr></thead>
      <tbody>${data.map((r) => `<tr>${columns.map((c) => `<td class="${c.align === 'end' ? 'is-end' : ''}">${c.badge ? '' : r[c.key]}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>`;
    wrap.querySelectorAll('tbody tr').forEach((tr, i) => columns.forEach((c, k) => {
      if (c.badge) { const [t, tone] = data[i][c.key]; tr.children[k].append(createBadge({ label: t, tone })); }
    }));
  };
  wrap.addEventListener('click', (e) => {
    const b = e.target.closest('[data-key]');
    if (!b) return;
    sort = { key: b.dataset.key, dir: sort.key === b.dataset.key ? -sort.dir : 1 };
    render();
    wrap.querySelector(`[data-key="${sort.key}"]`).focus();
  });
  render();
  return wrap;
};
