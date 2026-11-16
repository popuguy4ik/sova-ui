import { iconSvg } from '../../atoms/Icon/Icon.js';
import '../../atoms/Button/Button.css';
import './Header.css';

const NAV = [['features', 'Возможности'], ['team', 'Команда'], ['blog', 'Блог'], ['contacts', 'Контакты']];

/** Шапка: логотип, навигация с активным пунктом, переключатель темы, кнопки. До 1024 px вместо меню бургер. */
export const createHeader = ({ active = 'features', logoSrc = './static/logo.svg', loggedIn = false, compact = false } = {}) => {
  const el = document.createElement('header');
  el.className = `header${compact ? ' header--compact' : ''}`;
  const nav = NAV.map(([k, label]) => `<a href="#" class="header__link${k === active ? ' header__link--active' : ''}"${k === active ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  el.innerHTML = `
    <div class="header__inner">
      <a href="#" class="header__logo" aria-label="Сова, на главную"><img src="${logoSrc}" alt="" width="36" height="36"><span>Сова</span></a>
      <nav class="header__nav" aria-label="Основная навигация">${nav}</nav>
      <div class="header__actions">
        <button class="header__icon-btn" type="button" data-theme-toggle aria-label="Сменить тему">${iconSvg('moon', { size: 20 })}</button>
        ${loggedIn
          ? `<button class="header__icon-btn" type="button" aria-label="Уведомления">${iconSvg('bell', { size: 20 })}</button><span class="header__user" aria-label="Профиль">ИГ</span>`
          : '<a href="#" class="btn btn--ghost btn--sm header__login">Войти</a><a href="#" class="btn btn--primary btn--sm">Скачать</a>'}
        <button class="header__icon-btn header__burger" type="button" aria-label="Открыть меню" aria-expanded="false">${iconSvg('menu', { size: 20 })}</button>
      </div>
    </div>`;
  el.querySelector('[data-theme-toggle]').addEventListener('click', () => {
    const r = document.documentElement;
    r.setAttribute('data-theme', r.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
  return el;
};
