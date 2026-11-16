import './Tabs.css';

let uid = 0;

/** Вкладки по паттерну WAI-ARIA: стрелки переключают вкладки, Home/End переходят к крайним. */
export const createTabs = ({ tabs = [{ label: 'Вкладка 1', content: 'Содержимое 1' }, { label: 'Вкладка 2', content: 'Содержимое 2' }], active = 0, variant = 'line' } = {}) => {
  const base = `tabs-${++uid}`;
  const root = document.createElement('div');
  root.className = `tabs tabs--${variant}`;
  root.innerHTML = `
    <div class="tabs__list" role="tablist">
      ${tabs.map((t, i) => `<button class="tabs__tab" role="tab" type="button" id="${base}-tab-${i}" aria-controls="${base}-panel-${i}" aria-selected="${i === active}" tabindex="${i === active ? 0 : -1}">${t.label}</button>`).join('')}
    </div>
    ${tabs.map((t, i) => `<div class="tabs__panel" role="tabpanel" id="${base}-panel-${i}" aria-labelledby="${base}-tab-${i}" tabindex="0" ${i === active ? '' : 'hidden'}>${t.content}</div>`).join('')}`;
  const tabEls = [...root.querySelectorAll('[role="tab"]')];
  const select = (i, focus) => {
    tabEls.forEach((t, k) => {
      t.setAttribute('aria-selected', String(k === i));
      t.tabIndex = k === i ? 0 : -1;
      root.querySelector(`#${base}-panel-${k}`).hidden = k !== i;
    });
    if (focus) tabEls[i].focus();
  };
  root.addEventListener('click', (e) => { const t = e.target.closest('[role="tab"]'); if (t) select(tabEls.indexOf(t)); });
  root.querySelector('[role="tablist"]').addEventListener('keydown', (e) => {
    const i = tabEls.indexOf(document.activeElement);
    const keys = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabEls.length - 1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    select((keys[e.key] + tabEls.length) % tabEls.length, true);
  });
  return root;
};
