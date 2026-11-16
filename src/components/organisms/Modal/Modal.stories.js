import { createModal } from './Modal.js';
import { createButton } from '../../atoms/Button/Button.js';

export default {
  title: 'Organisms/Modal',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Модальное окно на нативном `<dialog>`: фокус остается внутри, Esc и клик по фону закрывают окно. Вариант `danger` для необратимых действий.' } } },
  argTypes: { tone: { control: 'inline-radio', options: ['default', 'danger'] } },
};

// Открытое окно прямо на странице: так его видно в документации и на скриншотах
const inline = (args) => {
  const dlg = createModal(args);
  dlg.classList.add('modal--inline');
  dlg.setAttribute('open', '');
  return dlg;
};

export const Default = {
  args: { title: 'Подключить компьютер?', text: 'Отсканируйте QR-код на экране компьютера в приложении Сова. Сеанс завершится сам через 7 дней без активности.', confirmLabel: 'Подключить', tone: 'default' },
  render: inline,
};

export const Danger = {
  args: { title: 'Удалить чат с Аней?', text: 'История сообщений удалится на всех ваших устройствах. Это действие нельзя отменить.', confirmLabel: 'Удалить', tone: 'danger' },
  render: inline,
};

export const Interactive = {
  name: 'Открытие по кнопке',
  render: () => {
    const wrap = document.createElement('div');
    const dlg = createModal({ title: 'Выйти из аккаунта?', text: 'Чтобы снова войти, понадобится код из СМС.', confirmLabel: 'Выйти', tone: 'danger' });
    const btn = createButton({ label: 'Выйти из аккаунта', variant: 'danger', icon: 'log-out' });
    btn.addEventListener('click', () => dlg.showModal());
    wrap.append(btn, dlg);
    return wrap;
  },
};
