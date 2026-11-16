import { iconSvg } from '../../atoms/Icon/Icon.js';
import '../../atoms/Button/Button.css';
import './SearchBar.css';

/** Поиск: иконка + поле + кнопка очистки + кнопка «Найти». Обертка role="search". */
export const createSearchBar = ({ placeholder = 'Поиск по чатам', value = '', buttonLabel = 'Найти', showButton = true, onSearch } = {}) => {
  const form = document.createElement('form');
  form.className = 'search';
  form.setAttribute('role', 'search');
  form.innerHTML = `
    <div class="search__field">
      ${iconSvg('search', { size: 20 })}
      <label class="visually-hidden" for="q">${placeholder}</label>
      <input class="search__input" id="q" type="search" name="q" placeholder="${placeholder}" autocomplete="off">
      <button class="search__clear" type="button" aria-label="Очистить">${iconSvg('x', { size: 18 })}</button>
    </div>
    ${showButton ? `<button class="btn btn--primary btn--md" type="submit">${buttonLabel}</button>` : ''}`;
  const input = form.querySelector('input');
  const clear = form.querySelector('.search__clear');
  input.value = value;
  const sync = () => { clear.hidden = !input.value; };
  input.addEventListener('input', sync);
  clear.addEventListener('click', () => { input.value = ''; sync(); input.focus(); });
  form.addEventListener('submit', (e) => { e.preventDefault(); onSearch && onSearch(input.value); });
  sync();
  return form;
};
