# Changelog

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/), версии по [Semantic Versioning](https://semver.org/lang/ru/).

## [1.0.0] - 2026-11-16

### Added
- Дизайн-токены в формате W3C Design Tokens: цвета (примитивы и семантика), типографика, отступы, радиусы, тени, анимации.
- Генерация CSS-переменных через Style Dictionary: `tokens.css` для светлой темы и `tokens-dark.css` для темной.
- Темная тема на уровне токенов, переключение атрибутом `data-theme` и кнопкой на панели Storybook.
- Атомы: `Button` (primary, secondary, ghost, danger, accent), `Input` (text, email, password, textarea), `Checkbox`, `Radio`, `Switch`, `Badge`, `Icon`, `Avatar`, `Spinner`.
- Молекулы: `FormField`, `SearchBar`, `Pagination`, `Breadcrumbs`, `Tabs`, `Tooltip`.
- Организмы: `Header`, `Footer`, `Card` (product, article, user), `Modal`, `Table`, `Form`.
- Шаблон «Страница блога» в двух видах: без данных и с данными.
- Документация в Storybook: введение, страница токенов, story с вариантами для каждого компонента.
