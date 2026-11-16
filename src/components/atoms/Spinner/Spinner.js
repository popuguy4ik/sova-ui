import './Spinner.css';

/** Индикатор загрузки. Подпись читается скринридером через role="status". */
export const createSpinner = ({ size = 'md', label = 'Загрузка' } = {}) => {
  const el = document.createElement('span');
  el.className = `spinner spinner--${size}`;
  el.setAttribute('role', 'status');
  el.innerHTML = `<span class="spinner__circle" aria-hidden="true"></span><span class="visually-hidden">${label}</span>`;
  return el;
};
