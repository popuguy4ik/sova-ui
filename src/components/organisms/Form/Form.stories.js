import { createForm } from './Form.js';

export default {
  title: 'Organisms/Form',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Форма собрана из молекул FormField и атомов Checkbox, Button, Spinner. Проверка на клиенте, при отправке кнопка блокируется и показывает спиннер.' } } },
  render: (args) => createForm(args),
};

export const Default = { args: { title: 'Написать в поддержку' } };
export const WithErrors = { args: { title: 'Написать в поддержку', showErrors: true } };
