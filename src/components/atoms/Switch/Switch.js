import './Switch.css';

let uid = 0;

/** Переключатель «вкл/выкл» для настроек, которые применяются сразу. role="switch". */
export const createSwitch = ({ label = 'Настройка', checked = false, disabled = false, state = 'default' } = {}) => {
  const id = `switch-${++uid}`;
  const wrap = document.createElement('label');
  wrap.className = ['switch', state === 'focus' ? 'is-focus' : ''].filter(Boolean).join(' ');
  wrap.htmlFor = id;
  wrap.innerHTML = `<span class="switch__label">${label}</span><input class="switch__input" type="checkbox" role="switch" id="${id}"><span class="switch__track" aria-hidden="true"><span class="switch__thumb"></span></span>`;
  const input = wrap.querySelector('input');
  input.checked = checked;
  input.disabled = disabled || state === 'disabled';
  return wrap;
};
