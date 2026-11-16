import './Breadcrumbs.css';

/** Хлебные крошки: последний пункт без ссылки и с aria-current="page". */
export const createBreadcrumbs = ({ items = [{ label: 'Главная', href: '#' }, { label: 'Раздел' }] } = {}) => {
  const nav = document.createElement('nav');
  nav.className = 'breadcrumbs';
  nav.setAttribute('aria-label', 'Хлебные крошки');
  nav.innerHTML = `<ol>${items.map((it, i) => i === items.length - 1
    ? `<li><span aria-current="page">${it.label}</span></li>`
    : `<li><a href="${it.href || '#'}">${it.label}</a></li>`).join('')}</ol>`;
  return nav;
};
