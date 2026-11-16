import { iconSvg } from '../../atoms/Icon/Icon.js';
import './Footer.css';

const COLS = [
  ['Продукт', ['Возможности', 'Веб-версия', 'Скачать']],
  ['Компания', ['Команда', 'Блог', 'Контакты']],
  ['Помощь', ['Поддержка', 'Как работает шифрование', 'hello@sova.example']],
];

/** Подвал: логотип, описание, соцсети и колонки ссылок. */
export const createFooter = ({ logoSrc = './static/logo.svg', note = 'Учебный проект, ЛР № 4 по веб-дизайну' } = {}) => {
  const el = document.createElement('footer');
  el.className = 'footer';
  el.innerHTML = `
    <div class="footer__inner">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="#" class="footer__logo"><img src="${logoSrc}" alt="" width="32" height="32"><span>Сова</span></a>
          <p>Мессенджер со сквозным шифрованием, который работает даже на слабом интернете.</p>
          <div class="footer__social">
            ${[['mail', 'Почта'], ['rss', 'Блог'], ['message-circle', 'Поддержка']].map(([i, l]) => `<a href="#" class="footer__social-link" aria-label="${l}">${iconSvg(i, { size: 20 })}</a>`).join('')}
          </div>
        </div>
        ${COLS.map(([t, links]) => `<nav aria-label="${t}"><h2 class="footer__title">${t}</h2><ul class="footer__list">${links.map((l) => `<li><a href="#">${l}</a></li>`).join('')}</ul></nav>`).join('')}
      </div>
      <div class="footer__bottom"><span>© 2026 Сова</span><span>${note}</span></div>
    </div>`;
  return el;
};
