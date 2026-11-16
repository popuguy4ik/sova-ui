import '../src/styles/global.css';

/** Глобальный переключатель темы на панели Storybook */
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Тема дизайн-системы',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Светлая', icon: 'sun' },
        { value: 'dark', title: 'Темная', icon: 'moon' },
      ],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (story, context) => {
    document.documentElement.setAttribute('data-theme', context.globals.theme || 'light');
    return story();
  },
];

export const parameters = {
  layout: 'padded',
  controls: { expanded: true, matchers: { color: /(background|color)$/i } },
  options: {
    storySort: { order: ['Введение', 'Foundations', 'Atoms', 'Molecules', 'Organisms', 'Templates'] },
  },
  backgrounds: { disable: true },
};

export const tags = ['autodocs'];
