# Sova UI

Дизайн-система продуктов мессенджера «Сова»: сайта, веб-версии и панели поддержки.
Токены в формате W3C Design Tokens, компоненты на чистом HTML, CSS и JS, документация в Storybook.

Автор: Гугучкин Илья Евгеньевич, группа ПРО-ИТ-104М. Лабораторная работа № 4 по дисциплине «Веб-дизайн».

## Запуск

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # статическая документация в storybook-static/
npm run tokens           # только пересобрать CSS из токенов
```

## Структура

```
sova-ui/
├── tokens/                  JSON-токены (W3C)
│   ├── colors.json, typography.json, spacing.json, radii.json, shadows.json, motion.json
│   └── themes/dark.json     переопределения для темной темы
├── style-dictionary.config.js
├── src/
│   ├── styles/              tokens.css, tokens-dark.css (генерируются), global.css
│   ├── foundations/         страница токенов в Storybook
│   ├── components/
│   │   ├── atoms/           Button, Input, Checkbox, Radio, Switch, Badge, Icon, Avatar, Spinner
│   │   ├── molecules/       FormField, SearchBar, Pagination, Breadcrumbs, Tabs, Tooltip
│   │   ├── organisms/       Header, Footer, Card, Modal, Table, Form
│   │   └── templates/       BlogPage
│   └── index.js
├── .storybook/              main.js, preview.js (переключатель темы), manager.js
└── CHANGELOG.md
```

Каждый компонент лежит в своей папке: `Name.js` (функция, которая возвращает DOM-элемент), `Name.css` и `Name.stories.js`.

## Правила

- Компоненты используют только семантические токены `--color-semantic-*`, примитивы нужны только внутри токенов.
- Новая версия выпускается по SemVer: MAJOR при несовместимых изменениях, MINOR при новых компонентах и вариантах, PATCH при исправлениях.
