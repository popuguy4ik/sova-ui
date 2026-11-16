import { iconSvg } from '../Icon/Icon.js';
import './Input.css';

let uid = 0;

/** Поле ввода: text | email | password. У password есть кнопка «показать пароль». */
export const createInput = ({
  type = 'text',
  placeholder = '',
  value = '',
  disabled = false,
  invalid = false,
  state = 'default',
  id = '',
  name = '',
  describedBy = '',
} = {}) => {
  const wrap = document.createElement('div');
  wrap.className = ['input', invalid ? 'input--invalid' : '', state === 'hover' ? 'is-hover' : '', state === 'focus' ? 'is-focus' : ''].filter(Boolean).join(' ');
  const input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
  input.className = 'input__control';
  if (type === 'textarea') { wrap.classList.add('input--textarea'); input.rows = 4; } else input.type = type;
  input.id = id || `input-${++uid}`;
  if (name) input.name = name;
  input.placeholder = placeholder;
  input.value = value;
  input.disabled = disabled || state === 'disabled';
  if (invalid) input.setAttribute('aria-invalid', 'true');
  if (describedBy) input.setAttribute('aria-describedby', describedBy);
  if (type === 'email') input.autocomplete = 'email';
  if (type === 'password') input.autocomplete = 'current-password';
  wrap.append(input);

  if (type === 'password') {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'input__toggle';
    toggle.setAttribute('aria-label', 'Показать пароль');
    toggle.setAttribute('aria-pressed', 'false');
    toggle.innerHTML = iconSvg('eye', { size: 20 });
    toggle.disabled = input.disabled;
    toggle.addEventListener('click', () => {
      const shown = input.type === 'text';
      input.type = shown ? 'password' : 'text';
      toggle.setAttribute('aria-pressed', String(!shown));
      toggle.setAttribute('aria-label', shown ? 'Показать пароль' : 'Скрыть пароль');
      toggle.innerHTML = iconSvg(shown ? 'eye' : 'eye-off', { size: 20 });
    });
    wrap.append(toggle);
  }
  return wrap;
};
