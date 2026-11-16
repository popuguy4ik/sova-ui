import '../Checkbox/Checkbox.css';
import './Radio.css';

let uid = 0;

/** Переключатель из группы: внутри одной группы одинаковый name. */
export const createRadio = ({ label = 'Вариант', name = 'radio', value = '', checked = false, disabled = false } = {}) => {
  const id = `radio-${++uid}`;
  const wrap = document.createElement('label');
  wrap.className = 'choice choice--radio';
  wrap.htmlFor = id;
  wrap.innerHTML = `<input class="choice__input" type="radio" id="${id}" name="${name}" value="${value || label}"><span class="choice__box" aria-hidden="true"></span><span class="choice__label">${label}</span>`;
  const input = wrap.querySelector('input');
  input.checked = checked;
  input.disabled = disabled;
  return wrap;
};

/** Группа переключателей с подписью (fieldset + legend). */
export const createRadioGroup = ({ legend = 'Группа', name = 'group', options = [], value = '' } = {}) => {
  const fs = document.createElement('fieldset');
  fs.className = 'radio-group';
  fs.innerHTML = `<legend class="radio-group__legend">${legend}</legend>`;
  options.forEach((o) => fs.append(createRadio({ label: o, name, checked: o === value })));
  return fs;
};
