import { createTabs } from './Tabs.js';

const TABS = [
  { label: 'Чаты', content: 'Список личных переписок и групп. Непрочитанные показываются сверху.' },
  { label: 'Звонки', content: 'История голосовых и видеозвонков за последние 30 дней.' },
  { label: 'Каналы', content: 'Каналы, на которые вы подписаны.' },
];

export default {
  title: 'Molecules/Tabs',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Вкладки по паттерну WAI-ARIA Tabs: Tab переводит фокус на активную вкладку, стрелки и Home/End переключают вкладки.' } } },
  argTypes: { variant: { control: 'inline-radio', options: ['line', 'pill'] }, active: { control: { type: 'number', min: 0, max: 2 } } },
  render: (args) => createTabs({ ...args, tabs: TABS }),
};

export const Line = { args: { variant: 'line', active: 0 } };
export const Pill = { args: { variant: 'pill', active: 1 } };
