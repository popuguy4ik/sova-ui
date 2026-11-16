import './Tooltip.css';

let uid = 0;

/** Подсказка: появляется при наведении и при фокусе, Esc скрывает. Связана с триггером через aria-describedby. */
export const createTooltip = ({ text = 'Подсказка', trigger, placement = 'top', open = false } = {}) => {
  const id = `tooltip-${++uid}`;
  const wrap = document.createElement('span');
  wrap.className = `tooltip tooltip--${placement}${open ? ' is-open' : ''}`;
  const target = trigger || Object.assign(document.createElement('button'), { type: 'button', className: 'btn btn--secondary btn--sm', textContent: 'Наведите' });
  target.setAttribute('aria-describedby', id);
  const bubble = document.createElement('span');
  bubble.className = 'tooltip__bubble';
  bubble.id = id;
  bubble.setAttribute('role', 'tooltip');
  bubble.textContent = text;
  wrap.append(target, bubble);
  target.addEventListener('keydown', (e) => { if (e.key === 'Escape') wrap.classList.add('is-dismissed'); });
  wrap.addEventListener('mouseleave', () => wrap.classList.remove('is-dismissed'));
  target.addEventListener('blur', () => wrap.classList.remove('is-dismissed'));
  return wrap;
};
