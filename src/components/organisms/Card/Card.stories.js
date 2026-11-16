import { createProductCard, createArticleCard, createUserCard } from './Card.js';
import { row } from '../../../utils/story.js';

export default {
  title: 'Organisms/Card',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Три вида карточек на общем каркасе: тариф (product), статья (article) и пользователь (user). При наведении карточка поднимается на 4 px.' } } },
  argTypes: { state: { control: 'inline-radio', options: ['default', 'hover'] } },
};

const FREE = ['Сквозное шифрование', 'Звонки и голосовые чаты', 'Файлы до 4 ГБ'];
const PLUS = ['Все из бесплатного', 'Файлы до 16 ГБ', 'Облачная копия на 100 ГБ', 'Приоритетная поддержка'];

export const Product = {
  args: { title: 'Сова Плюс', price: '199 ₽', period: 'в месяц', features: PLUS, badge: 'Популярный', featured: true, state: 'default' },
  render: (args) => createProductCard(args),
};

export const Article = {
  args: { image: './static/covers/post-privacy.svg', tag: 'Советы', title: 'Пять настроек приватности, которые стоит включить', text: 'Скрытый номер, код-пароль, исчезающие сообщения и еще две настройки.', meta: '24 сентября 2026 · 5 мин', state: 'default' },
  render: (args) => createArticleCard(args),
};

export const User = {
  args: { initials: 'ЕС', color: 'night', name: 'Екатерина Соколова', role: 'Основатель и CEO', bio: 'Десять лет делала банковские приложения. Сову придумала, когда не смогла дозвониться до мамы на даче.', online: true, state: 'default' },
  render: (args) => createUserCard(args),
};

export const Pricing = {
  name: 'Тарифы рядом',
  render: () => row([
    createProductCard({ title: 'Сова', price: '0 ₽', period: 'навсегда', features: FREE, actionLabel: 'Скачать' }),
    createProductCard({ title: 'Сова Плюс', price: '199 ₽', period: 'в месяц', features: PLUS, badge: 'Популярный', featured: true }),
  ], { align: 'stretch', gap: 24 }),
};

export const HoverStates = {
  name: 'Default и Hover',
  render: () => row([
    createArticleCard({ title: 'Почему Сова работает в метро', tag: 'Технологии', image: './static/covers/post-metro.svg', text: 'Как мы сжимаем трафик и не теряем сообщения.', meta: '15 сентября 2026 · 6 мин' }),
    createArticleCard({ title: 'Почему Сова работает в метро', tag: 'Технологии', image: './static/covers/post-metro.svg', text: 'Как мы сжимаем трафик и не теряем сообщения.', meta: '15 сентября 2026 · 6 мин', state: 'hover' }),
  ], { align: 'stretch', gap: 24 }),
};
