import { iconSvg } from '../../atoms/Icon/Icon.js';
import { createBadge } from '../../atoms/Badge/Badge.js';
import { createAvatar } from '../../atoms/Avatar/Avatar.js';
import { createButton } from '../../atoms/Button/Button.js';
import './Card.css';

/** Карточка тарифа (product): цена, список возможностей и кнопка. */
export const createProductCard = ({ title = 'Сова Плюс', price = '199 ₽', period = 'в месяц', features = [], badge = '', actionLabel = 'Подключить', featured = false, state = 'default' } = {}) => {
  const el = document.createElement('article');
  el.className = ['card', 'card--product', featured ? 'card--featured' : '', state === 'hover' ? 'is-hover' : ''].filter(Boolean).join(' ');
  el.innerHTML = `
    <div class="card__body">
      <div class="card__head"><h3 class="card__title">${title}</h3></div>
      <p class="card__price"><strong>${price}</strong> <span>${period}</span></p>
      <ul class="card__features">${features.map((f) => `<li>${iconSvg('check', { size: 20 })}<span>${f}</span></li>`).join('')}</ul>
    </div>`;
  if (badge) el.querySelector('.card__head').append(createBadge({ label: badge, tone: 'info', icon: false }));
  el.querySelector('.card__body').append(createButton({ label: actionLabel, variant: featured ? 'primary' : 'secondary', block: true }));
  return el;
};

/** Карточка статьи (article): обложка, тег, заголовок-ссылка на всю карточку, мета. */
export const createArticleCard = ({ image = './static/covers/post-privacy.svg', tag = 'Советы', title = 'Пять настроек приватности', text = '', meta = '', href = '#', state = 'default' } = {}) => {
  const el = document.createElement('article');
  el.className = ['card', 'card--article', state === 'hover' ? 'is-hover' : ''].filter(Boolean).join(' ');
  el.innerHTML = `
    <img class="card__image" src="${image}" alt="" width="640" height="360" loading="lazy">
    <div class="card__body">
      <span class="card__tag">${tag}</span>
      <h3 class="card__title"><a class="card__link" href="${href}">${title}</a></h3>
      <p class="card__text">${text}</p>
      <div class="card__meta"><span>${meta}</span>${iconSvg('arrow-right', { size: 20 })}</div>
    </div>`;
  return el;
};

/** Карточка пользователя (user): аватар, имя, роль, описание, кнопка «Написать». */
export const createUserCard = ({ initials = 'ЕС', color = 'night', name = 'Екатерина Соколова', role = 'Основатель и CEO', bio = '', online = false, state = 'default' } = {}) => {
  const el = document.createElement('article');
  el.className = ['card', 'card--user', state === 'hover' ? 'is-hover' : ''].filter(Boolean).join(' ');
  el.innerHTML = `<div class="card__body"></div>`;
  const body = el.querySelector('.card__body');
  body.append(createAvatar({ initials, color, size: 'lg', online }));
  body.insertAdjacentHTML('beforeend', `<h3 class="card__title">${name}</h3><p class="card__role">${role}</p><p class="card__text">${bio}</p>`);
  body.append(createButton({ label: 'Написать', variant: 'secondary', size: 'sm', icon: 'message-circle' }));
  return el;
};
