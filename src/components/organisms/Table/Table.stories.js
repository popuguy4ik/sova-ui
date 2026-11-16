import { createTable } from './Table.js';

const COLUMNS = [
  { key: 'device', label: 'Устройство', sortable: true },
  { key: 'place', label: 'Где', sortable: true },
  { key: 'last', label: 'Последний вход', sortable: true },
  { key: 'status', label: 'Статус', badge: true },
];
const ROWS = [
  { device: 'iPhone 15', place: 'Москва', last: '2026-11-16 09:12', status: ['Этот телефон', 'success'] },
  { device: 'MacBook Air, веб-версия', place: 'Москва', last: '2026-11-15 22:40', status: ['Активен', 'info'] },
  { device: 'Windows, приложение', place: 'Казань', last: '2026-11-02 18:05', status: ['Давно не входил', 'warning'] },
  { device: 'Android, Pixel 7', place: 'Неизвестно', last: '2026-10-28 03:17', status: ['Подозрительный', 'error'] },
];

export default {
  title: 'Organisms/Table',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Таблица с сортировкой: заголовок колонки это кнопка, состояние передается в `aria-sort`. На узком экране таблица прокручивается по горизонтали.' } } },
  render: (args) => createTable(args),
};

export const Devices = { args: { caption: 'Активные сеансы', columns: COLUMNS, rows: ROWS } };
export const Striped = { args: { caption: 'Активные сеансы', columns: COLUMNS, rows: ROWS, striped: true } };
