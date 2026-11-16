import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Header-DFBWCp2K.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Organisms/Header`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:'Шапка сайта и веб-версии. Активный пункт меню подчеркнут и помечен `aria-current="page"`. Кнопка с луной переключает тему.'}}},argTypes:{active:{control:`select`,options:[`features`,`team`,`blog`,`contacts`,`none`]}},render:e=>n(e)},i={args:{active:`features`}},a={args:{active:`blog`,loggedIn:!0}},o={args:{active:`features`,compact:!0},parameters:{viewport:{defaultViewport:`mobile1`}}},s=[`Guest`,`LoggedIn`,`Mobile`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    active: 'features'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    active: 'blog',
    loggedIn: true
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    active: 'features',
    compact: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...o.parameters?.docs?.source}}}})))()}c();export{i as Guest,a as LoggedIn,o as Mobile,s as __namedExportsOrder,r as default};