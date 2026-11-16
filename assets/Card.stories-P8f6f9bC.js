import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t,t as n}from"./story-B4_R5Lf5.js";import{i as r,n as i,r as a,t as o}from"./Card-CsW1Z7Pn.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),n(),s={title:`Organisms/Card`,tags:[`autodocs`],parameters:{docs:{description:{component:`Три вида карточек на общем каркасе: тариф (product), статья (article) и пользователь (user). При наведении карточка поднимается на 4 px.`}}},argTypes:{state:{control:`inline-radio`,options:[`default`,`hover`]}}},c=[`Сквозное шифрование`,`Звонки и голосовые чаты`,`Файлы до 4 ГБ`],l=[`Все из бесплатного`,`Файлы до 16 ГБ`,`Облачная копия на 100 ГБ`,`Приоритетная поддержка`],u={args:{title:`Сова Плюс`,price:`199 ₽`,period:`в месяц`,features:l,badge:`Популярный`,featured:!0,state:`default`},render:e=>i(e)},d={args:{image:`./static/covers/post-privacy.svg`,tag:`Советы`,title:`Пять настроек приватности, которые стоит включить`,text:`Скрытый номер, код-пароль, исчезающие сообщения и еще две настройки.`,meta:`24 сентября 2026 · 5 мин`,state:`default`},render:e=>o(e)},f={args:{initials:`ЕС`,color:`night`,name:`Екатерина Соколова`,role:`Основатель и CEO`,bio:`Десять лет делала банковские приложения. Сову придумала, когда не смогла дозвониться до мамы на даче.`,online:!0,state:`default`},render:e=>a(e)},p={name:`Тарифы рядом`,render:()=>t([i({title:`Сова`,price:`0 ₽`,period:`навсегда`,features:c,actionLabel:`Скачать`}),i({title:`Сова Плюс`,price:`199 ₽`,period:`в месяц`,features:l,badge:`Популярный`,featured:!0})],{align:`stretch`,gap:24})},m={name:`Default и Hover`,render:()=>t([o({title:`Почему Сова работает в метро`,tag:`Технологии`,image:`./static/covers/post-metro.svg`,text:`Как мы сжимаем трафик и не теряем сообщения.`,meta:`15 сентября 2026 · 6 мин`}),o({title:`Почему Сова работает в метро`,tag:`Технологии`,image:`./static/covers/post-metro.svg`,text:`Как мы сжимаем трафик и не теряем сообщения.`,meta:`15 сентября 2026 · 6 мин`,state:`hover`})],{align:`stretch`,gap:24})},h=[`Product`,`Article`,`User`,`Pricing`,`HoverStates`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Сова Плюс',
    price: '199 ₽',
    period: 'в месяц',
    features: PLUS,
    badge: 'Популярный',
    featured: true,
    state: 'default'
  },
  render: args => createProductCard(args)
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    image: './static/covers/post-privacy.svg',
    tag: 'Советы',
    title: 'Пять настроек приватности, которые стоит включить',
    text: 'Скрытый номер, код-пароль, исчезающие сообщения и еще две настройки.',
    meta: '24 сентября 2026 · 5 мин',
    state: 'default'
  },
  render: args => createArticleCard(args)
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    initials: 'ЕС',
    color: 'night',
    name: 'Екатерина Соколова',
    role: 'Основатель и CEO',
    bio: 'Десять лет делала банковские приложения. Сову придумала, когда не смогла дозвониться до мамы на даче.',
    online: true,
    state: 'default'
  },
  render: args => createUserCard(args)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Тарифы рядом',
  render: () => row([createProductCard({
    title: 'Сова',
    price: '0 ₽',
    period: 'навсегда',
    features: FREE,
    actionLabel: 'Скачать'
  }), createProductCard({
    title: 'Сова Плюс',
    price: '199 ₽',
    period: 'в месяц',
    features: PLUS,
    badge: 'Популярный',
    featured: true
  })], {
    align: 'stretch',
    gap: 24
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Default и Hover',
  render: () => row([createArticleCard({
    title: 'Почему Сова работает в метро',
    tag: 'Технологии',
    image: './static/covers/post-metro.svg',
    text: 'Как мы сжимаем трафик и не теряем сообщения.',
    meta: '15 сентября 2026 · 6 мин'
  }), createArticleCard({
    title: 'Почему Сова работает в метро',
    tag: 'Технологии',
    image: './static/covers/post-metro.svg',
    text: 'Как мы сжимаем трафик и не теряем сообщения.',
    meta: '15 сентября 2026 · 6 мин',
    state: 'hover'
  })], {
    align: 'stretch',
    gap: 24
  })
}`,...m.parameters?.docs?.source}}}})))()}g();export{d as Article,m as HoverStates,p as Pricing,u as Product,f as User,h as __namedExportsOrder,s as default};