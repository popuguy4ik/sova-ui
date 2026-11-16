import { createHeader } from './Header.js';

export default {
  title: 'Organisms/Header',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Шапка сайта и веб-версии. Активный пункт меню подчеркнут и помечен `aria-current="page"`. Кнопка с луной переключает тему.' } } },
  argTypes: { active: { control: 'select', options: ['features', 'team', 'blog', 'contacts', 'none'] } },
  render: (args) => createHeader(args),
};

export const Guest = { args: { active: 'features' } };
export const LoggedIn = { args: { active: 'blog', loggedIn: true } };
export const Mobile = { args: { active: 'features', compact: true }, parameters: { viewport: { defaultViewport: 'mobile1' } } };
