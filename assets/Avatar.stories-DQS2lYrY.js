import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Avatar-Bx-Q1jUX.js";import{r,t as i}from"./story-B4_R5Lf5.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),i(),a={title:`Atoms/Avatar`,tags:[`autodocs`],argTypes:{color:{control:`inline-radio`,options:[`indigo`,`violet`,`amber`,`night`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]}},render:e=>n(e)},o={args:{initials:`ЕС`,name:`Екатерина Соколова`,color:`night`,size:`md`}},s={args:{initials:`АФ`,name:`Анна Филина`,color:`violet`,size:`md`,online:!0}},c={render:()=>r([`sm`,`md`,`lg`].map(e=>n({initials:`МГ`,color:`amber`,size:e})))},l={render:()=>r([`indigo`,`violet`,`amber`,`night`].map(e=>n({initials:`ДО`,color:e,online:e===`indigo`})))},u=[`Default`,`Online`,`Sizes`,`Colors`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    initials: 'ЕС',
    name: 'Екатерина Соколова',
    color: 'night',
    size: 'md'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initials: 'АФ',
    name: 'Анна Филина',
    color: 'violet',
    size: 'md',
    online: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => row(['sm', 'md', 'lg'].map(size => createAvatar({
    initials: 'МГ',
    color: 'amber',
    size
  })))
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => row(['indigo', 'violet', 'amber', 'night'].map(color => createAvatar({
    initials: 'ДО',
    color,
    online: color === 'indigo'
  })))
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Colors,o as Default,s as Online,c as Sizes,u as __namedExportsOrder,a as default};