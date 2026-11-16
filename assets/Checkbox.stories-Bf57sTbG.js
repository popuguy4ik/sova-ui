import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,t as n}from"./story-B4_R5Lf5.js";import{n as r,t as i}from"./Checkbox-BYh_ZMQe.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),n(),a={title:`Atoms/Checkbox`,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`default`,`focus`,`disabled`]}},render:e=>i(e)},o={args:{label:`Показывать превью сообщений`}},s={args:{label:`Показывать превью сообщений`,checked:!0}},c={args:{label:`Выбрать все чаты`,indeterminate:!0}},l={args:{label:`Синхронизация контактов`,checked:!0,disabled:!0}},u={render:()=>t([i({label:`Не выбран`}),i({label:`Выбран`,checked:!0}),i({label:`Частично`,indeterminate:!0}),i({label:`В фокусе`,state:`focus`}),i({label:`Недоступен`,disabled:!0})],{gap:12})},d=[`Unchecked`,`Checked`,`Indeterminate`,`Disabled`,`States`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Показывать превью сообщений'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Показывать превью сообщений',
    checked: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Выбрать все чаты',
    indeterminate: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Синхронизация контактов',
    checked: true,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => stack([createCheckbox({
    label: 'Не выбран'
  }), createCheckbox({
    label: 'Выбран',
    checked: true
  }), createCheckbox({
    label: 'Частично',
    indeterminate: true
  }), createCheckbox({
    label: 'В фокусе',
    state: 'focus'
  }), createCheckbox({
    label: 'Недоступен',
    disabled: true
  })], {
    gap: 12
  })
}`,...u.parameters?.docs?.source}}}})))()}f();export{s as Checked,l as Disabled,c as Indeterminate,u as States,o as Unchecked,d as __namedExportsOrder,a as default};