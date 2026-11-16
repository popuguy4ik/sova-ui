import { createHeader } from '../../organisms/Header/Header.js';
import { createFooter } from '../../organisms/Footer/Footer.js';
import { createArticleCard } from '../../organisms/Card/Card.js';
import { createBreadcrumbs } from '../../molecules/Breadcrumbs/Breadcrumbs.js';
import { createSearchBar } from '../../molecules/SearchBar/SearchBar.js';
import { createTabs } from '../../molecules/Tabs/Tabs.js';
import { createPagination } from '../../molecules/Pagination/Pagination.js';
import './BlogPage.css';

export default {
  title: 'Templates/Страница блога',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Шаблон и страница по Atomic Design: организмы Header, Card, Footer и молекулы Breadcrumbs, SearchBar, Tabs, Pagination собраны в страницу блога.' } } },
};

const POSTS = [
  ['post-privacy', 'Советы', 'Пять настроек приватности, которые стоит включить', 'Скрытый номер, код-пароль, исчезающие сообщения и еще две настройки.', '24 сентября 2026 · 5 мин'],
  ['post-metro', 'Технологии', 'Почему Сова работает в метро', 'Как мы сжимаем трафик и не теряем сообщения при плохой связи.', '15 сентября 2026 · 6 мин'],
  ['post-web', 'Новости', 'Веб-версия вышла из беты', 'За три месяца мы исправили 140 ошибок и добавили звонки из браузера.', '3 сентября 2026 · 3 мин'],
  ['encryption', 'Безопасность', 'Как устроено сквозное шифрование', 'Где хранятся ключи и что видит сервер.', '12 октября 2026 · 7 мин'],
  ['voice', 'Новости', 'Голосовые чаты до 200 человек', 'Как работают новые комнаты для разговоров.', '2 октября 2026 · 4 мин'],
];

const page = (withData) => {
  const root = document.createElement('div');
  root.className = 'tpl';
  root.append(createHeader({ active: 'blog' }));
  const main = document.createElement('main');
  main.className = 'tpl__main';
  main.append(createBreadcrumbs({ items: [{ label: 'Главная', href: '#' }, { label: 'Блог' }] }));
  main.insertAdjacentHTML('beforeend', '<h1 class="tpl__title">Блог</h1><p class="tpl__lead">Новости Совы, советы по приватности и рассказы о том, как устроен мессенджер.</p>');
  const tools = document.createElement('div');
  tools.className = 'tpl__tools';
  tools.append(createTabs({ variant: 'pill', tabs: ['Все', 'Новости', 'Советы', 'Технологии'].map((l) => ({ label: l, content: '' })) }), createSearchBar({ placeholder: 'Поиск по статьям', showButton: false }));
  tools.querySelectorAll('.tabs__panel').forEach((p) => p.remove());
  main.append(tools);
  const grid = document.createElement('div');
  grid.className = 'tpl__grid';
  POSTS.concat([POSTS[0]]).forEach(([img, tag, title, text, meta], i) => grid.append(withData
    ? createArticleCard({ image: `./static/covers/${img}.svg`, tag, title, text, meta })
    : createArticleCard({ image: '', tag: 'Тег', title: 'Заголовок статьи', text: 'Короткое описание в две строки.', meta: 'Дата · время чтения' })));
  main.append(grid);
  const pg = createPagination({ current: 1, total: 4, label: 'Страницы блога' });
  pg.classList.add('tpl__pagination');
  main.append(pg);
  root.append(main, createFooter());
  return root;
};

export const Template = { name: 'Шаблон (без данных)', render: () => page(false) };
export const Page = { name: 'Страница с данными', render: () => page(true) };
