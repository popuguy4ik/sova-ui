import { createInput } from '../../atoms/Input/Input.js';
import './FormField.css';

let uid = 0;

/** Поле формы: подпись + Input + подсказка + ошибка. Подсказка и ошибка связаны с полем через aria-describedby. */
export const createFormField = ({
  label = 'Подпись',
  type = 'text',
  placeholder = '',
  value = '',
  helper = '',
  error = '',
  required = false,
  disabled = false,
  name = '',
} = {}) => {
  const id = `field-${++uid}`;
  const wrap = document.createElement('div');
  wrap.className = 'form-field';
  const described = [helper ? `${id}-helper` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ');
  const lab = document.createElement('label');
  lab.className = 'form-field__label';
  lab.htmlFor = id;
  lab.innerHTML = `${label}${required ? ' <span class="form-field__required" aria-hidden="true">*</span>' : ''}`;
  const input = createInput({ type, placeholder, value, disabled, invalid: !!error, id, name, describedBy: described });
  if (required) input.querySelector('.input__control').required = true;
  wrap.append(lab, input);
  if (helper) wrap.insertAdjacentHTML('beforeend', `<p class="form-field__helper" id="${id}-helper">${helper}</p>`);
  if (error) wrap.insertAdjacentHTML('beforeend', `<p class="form-field__error" id="${id}-error">${error}</p>`);
  return wrap;
};
