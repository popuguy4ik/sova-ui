import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t,t as n}from"./story-B4_R5Lf5.js";import{n as r,t as i}from"./Button-GeRw_Tps.js";import{n as a,t as o}from"./Spinner-DV9ym0aU.js";var s,c,l,u,d;function f(){return(f=e((()=>{a(),r(),n(),s={title:`Atoms/Spinner`,tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]}},render:e=>o(e)},c={args:{size:`md`,label:`Загрузка чатов`}},l={render:()=>t([`sm`,`md`,`lg`].map(e=>o({size:e})))},u={name:`В кнопке`,render:()=>{let e=i({label:`Отправляем`,disabled:!0}),t=o({size:`sm`});return t.style.color=`inherit`,e.prepend(t),e}},d=[`Default`,`Sizes`,`InButton`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Загрузка чатов'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => row(['sm', 'md', 'lg'].map(size => createSpinner({
    size
  })))
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'В кнопке',
  render: () => {
    const btn = createButton({
      label: 'Отправляем',
      disabled: true
    });
    const sp = createSpinner({
      size: 'sm'
    });
    sp.style.color = 'inherit';
    btn.prepend(sp);
    return btn;
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Default,u as InButton,l as Sizes,d as __namedExportsOrder,s as default};