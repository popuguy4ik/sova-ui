import './Checkbox.css';

let uid = 0;

/** Флажок. indeterminate показывает «частично выбрано», например в шапке таблицы. */
export const createCheckbox = ({ label = 'Флажок', checked = false, disabled = false, indeterminate = false, name = '', state = 'default' } = {}) => {
  const id = `checkbox-${++uid}`;
  const wrap = document.createElement('label');
  wrap.className = ['choice', 'choice--checkbox', state === 'focus' ? 'is-focus' : ''].filter(Boolean).join(' ');
  wrap.htmlFor = id;
  wrap.innerHTML = `<input class="choice__input" type="checkbox" id="${id}" ${name ? `name="${name}"` : ''}><span class="choice__box" aria-hidden="true"></span><span class="choice__label">${label}</span>`;
  const input = wrap.querySelector('input');
  input.checked = checked;
  input.disabled = disabled || state === 'disabled';
  input.indeterminate = indeterminate;
  return wrap;
};
