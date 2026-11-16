import { iconSvg } from '../../atoms/Icon/Icon.js';
import { createButton } from '../../atoms/Button/Button.js';
import './Modal.css';

let uid = 0;

/**
 * Модальное окно на <dialog>: фокус внутри, Esc и клик по фону закрывают.
 * tone: default | danger (для подтверждения необратимых действий).
 */
export const createModal = ({ title = 'Заголовок', text = '', confirmLabel = 'Подтвердить', cancelLabel = 'Отмена', tone = 'default', onConfirm } = {}) => {
  const id = `modal-${++uid}`;
  const dlg = document.createElement('dialog');
  dlg.className = `modal modal--${tone}`;
  dlg.setAttribute('aria-labelledby', `${id}-title`);
  dlg.setAttribute('aria-describedby', `${id}-text`);
  dlg.innerHTML = `
    <div class="modal__box">
      <button class="modal__close" type="button" aria-label="Закрыть">${iconSvg('x', { size: 20 })}</button>
      ${tone === 'danger' ? `<span class="modal__icon">${iconSvg('triangle-alert', { size: 24 })}</span>` : ''}
      <h2 class="modal__title" id="${id}-title">${title}</h2>
      <p class="modal__text" id="${id}-text">${text}</p>
      <div class="modal__actions"></div>
    </div>`;
  const actions = dlg.querySelector('.modal__actions');
  const cancel = createButton({ label: cancelLabel, variant: 'ghost' });
  const ok = createButton({ label: confirmLabel, variant: tone === 'danger' ? 'danger' : 'primary' });
  actions.append(cancel, ok);
  cancel.addEventListener('click', () => dlg.close('cancel'));
  ok.addEventListener('click', () => { onConfirm && onConfirm(); dlg.close('ok'); });
  dlg.querySelector('.modal__close').addEventListener('click', () => dlg.close('cancel'));
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close('cancel'); });
  return dlg;
};
