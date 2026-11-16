import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t,t as n}from"./story-B4_R5Lf5.js";import{n as r,t as i}from"./Badge-CWX16bm4.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),n(),a={title:`Atoms/Badge`,tags:[`autodocs`],argTypes:{tone:{control:`inline-radio`,options:[`info`,`success`,`warning`,`error`,`neutral`]}},render:e=>i(e)},o={args:{tone:`info`,label:`Новое`}},s={args:{tone:`success`,label:`Доставлено`}},c={args:{tone:`warning`,label:`Слабая сеть`}},l={args:{tone:`error`,label:`Не отправлено`}},u={render:()=>t([i({tone:`info`,label:`Новое`}),i({tone:`success`,label:`Доставлено`}),i({tone:`warning`,label:`Слабая сеть`}),i({tone:`error`,label:`Не отправлено`}),i({tone:`neutral`,label:`Архив`,icon:!1})],{gap:12})},d=[`Info`,`Success`,`Warning`,`Error`,`AllTones`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    label: 'Новое'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    label: 'Доставлено'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    label: 'Слабая сеть'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'error',
    label: 'Не отправлено'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => row([createBadge({
    tone: 'info',
    label: 'Новое'
  }), createBadge({
    tone: 'success',
    label: 'Доставлено'
  }), createBadge({
    tone: 'warning',
    label: 'Слабая сеть'
  }), createBadge({
    tone: 'error',
    label: 'Не отправлено'
  }), createBadge({
    tone: 'neutral',
    label: 'Архив',
    icon: false
  })], {
    gap: 12
  })
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as AllTones,l as Error,o as Info,s as Success,c as Warning,d as __namedExportsOrder,a as default};