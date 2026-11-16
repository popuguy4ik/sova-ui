import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./Tabs-DTU1LBmz.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r=[{label:`Чаты`,content:`Список личных переписок и групп. Непрочитанные показываются сверху.`},{label:`Звонки`,content:`История голосовых и видеозвонков за последние 30 дней.`},{label:`Каналы`,content:`Каналы, на которые вы подписаны.`}],i={title:`Molecules/Tabs`,tags:[`autodocs`],parameters:{docs:{description:{component:`Вкладки по паттерну WAI-ARIA Tabs: Tab переводит фокус на активную вкладку, стрелки и Home/End переключают вкладки.`}}},argTypes:{variant:{control:`inline-radio`,options:[`line`,`pill`]},active:{control:{type:`number`,min:0,max:2}}},render:e=>n({...e,tabs:r})},a={args:{variant:`line`,active:0}},o={args:{variant:`pill`,active:1}},s=[`Line`,`Pill`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    active: 0
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pill',
    active: 1
  }
}`,...o.parameters?.docs?.source}}}})))()}c();export{a as Line,o as Pill,s as __namedExportsOrder,i as default};