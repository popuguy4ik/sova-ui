import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,n,r,t as i}from"./story-B4_R5Lf5.js";import{i as a,n as o}from"./Icon-C35lnsGL.js";import{n as s,t as c}from"./Button-GeRw_Tps.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{s(),a(),i(),l={title:`Atoms/Button`,tags:[`autodocs`],parameters:{docs:{description:{component:"Основное действие на экране. Четыре варианта из спецификации плюс `accent` для главного призыва на маркетинговых страницах. Высота 40 / 48 / 56 px, фокус виден с клавиатуры."}}},argTypes:{variant:{control:{type:`select`},options:[`primary`,`secondary`,`ghost`,`danger`,`accent`]},size:{control:{type:`select`},options:[`sm`,`md`,`lg`]},state:{control:{type:`select`},options:[`default`,`hover`,`focus`,`disabled`],description:`Принудительное состояние для документации`},disabled:{control:`boolean`},icon:{control:`select`,options:[``,...o]},iconPosition:{control:`inline-radio`,options:[`start`,`end`]},block:{control:`boolean`}},render:e=>c(e)},u={args:{variant:`primary`,size:`md`,label:`Скачать`}},d={args:{variant:`secondary`,size:`md`,label:`Подробнее`}},f={args:{variant:`ghost`,size:`md`,label:`Отмена`}},p={args:{variant:`danger`,size:`md`,label:`Удалить чат`,icon:`trash-2`}},m={args:{variant:`primary`,size:`md`,label:`Отправить`,icon:`send`,iconPosition:`end`}},h={render:()=>r([`sm`,`md`,`lg`].map(e=>c({label:{sm:`Small`,md:`Medium`,lg:`Large`}[e],size:e})))},g={args:{variant:`primary`,size:`md`,label:`Недоступно`,disabled:!0}},_={name:`Все варианты и состояния`,render:()=>t([`primary`,`secondary`,`ghost`,`danger`].map(e=>n(e,r([`default`,`hover`,`focus`,`disabled`].map(t=>c({variant:e,state:t,label:t[0].toUpperCase()+t.slice(1)})),{gap:24}))))},v=[`Primary`,`Secondary`,`Ghost`,`Danger`,`WithIcon`,`Sizes`,`Disabled`,`AllStates`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Скачать'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Подробнее'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'md',
    label: 'Отмена'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    size: 'md',
    label: 'Удалить чат',
    icon: 'trash-2'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Отправить',
    icon: 'send',
    iconPosition: 'end'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => row(['sm', 'md', 'lg'].map(size => createButton({
    label: {
      sm: 'Small',
      md: 'Medium',
      lg: 'Large'
    }[size],
    size
  })))
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Недоступно',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Все варианты и состояния',
  render: () => stack(['primary', 'secondary', 'ghost', 'danger'].map(variant => labeled(variant, row(['default', 'hover', 'focus', 'disabled'].map(state => createButton({
    variant,
    state,
    label: state[0].toUpperCase() + state.slice(1)
  })), {
    gap: 24
  }))))
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as AllStates,p as Danger,g as Disabled,f as Ghost,u as Primary,d as Secondary,h as Sizes,m as WithIcon,v as __namedExportsOrder,l as default};