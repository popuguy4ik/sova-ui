import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{a as r}from"./chunk-W22LQPXL-DkWiGpo7.js";import{a as i,o as a}from"./blocks-Dx_akYV1.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Введение`}),`
`,(0,c.jsx)(n.h1,{id:`sova-ui`,children:`Sova UI`}),`
`,(0,c.jsxs)(n.p,{children:[`Дизайн-система продуктов мессенджера «Сова»: сайта, веб-версии мессенджера и панели службы поддержки. Версия `,(0,c.jsx)(n.strong,{children:`1.1.0`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`принципы`,children:`Принципы`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Приватность видна.`}),` Все, что касается безопасности (шифрование, устройства, удаление данных), оформлено явно и не прячется в мелкий текст. Для необратимых действий есть отдельный вариант `,(0,c.jsx)(n.code,{children:`danger`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Работает на слабом интернете.`}),` Никаких тяжелых библиотек: компоненты на чистом HTML, CSS и JS, шрифты лежат вместе с системой.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Доступность по умолчанию.`}),` Контраст не ниже WCAG 2.1 AA в обеих темах, у каждого интерактивного элемента виден фокус, есть роли и подписи ARIA.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Только токены.`}),` Компоненты не используют цвета напрямую, только семантические токены. Поэтому темная тема и смена бренда делаются в одном месте.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Расширяемость.`}),` Новый компонент собирается из существующих атомов и молекул, а не рисуется заново.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-устроена`,children:`Как устроена`}),`
`,(0,c.jsx)(n.p,{children:`| Уровень | Компоненты |
|---|---|
| Foundations | Цвета, типографика, отступы, радиусы, тени, анимации |
| Atoms | Button, Input, Checkbox, Radio, Switch, Badge, Icon, Avatar, Spinner |
| Molecules | FormField, SearchBar, Pagination, Breadcrumbs, Tabs, Tooltip |
| Organisms | Header, Footer, Card (product, article, user), Modal, Table, Form |
| Templates | Страница блога: шаблон и страница с данными |`}),`
`,(0,c.jsx)(n.h2,{id:`токены`,children:`Токены`}),`
`,(0,c.jsxs)(n.p,{children:[`Токены описаны в JSON по стандарту W3C Design Tokens в папке `,(0,c.jsx)(n.code,{children:`tokens/`}),`. Style Dictionary собирает из них два файла: `,(0,c.jsx)(n.code,{children:`tokens.css`}),` со светлой темой и `,(0,c.jsx)(n.code,{children:`tokens-dark.css`}),` с переопределениями для темной. Тема включается атрибутом `,(0,c.jsx)(n.code,{children:`data-theme="dark"`}),` на `,(0,c.jsx)(n.code,{children:`<html>`}),`, а в Storybook переключателем на панели сверху.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run tokens           # JSON → CSS
npm run storybook        # документация на localhost:6006
npm run build-storybook  # статический сайт в storybook-static/
`})}),`
`,(0,c.jsx)(n.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-js`,children:`import 'sova-ui/src/styles/global.css';
import { createButton } from 'sova-ui/src/components/atoms/Button/Button.js';

document.body.append(createButton({ label: 'Скачать', variant: 'primary', size: 'lg' }));
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),n(),a()})))()}l();export{s as default};