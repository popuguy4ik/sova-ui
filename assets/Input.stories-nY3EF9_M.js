import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,n,t as r}from"./story-B4_R5Lf5.js";import{n as i,t as a}from"./Input-DuUIF31C.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),r(),o={title:`Atoms/Input`,tags:[`autodocs`],parameters:{docs:{description:{component:`Однострочное поле ввода. Подпись и сообщение об ошибке добавляет молекула FormField.`}}},argTypes:{type:{control:`inline-radio`,options:[`text`,`email`,`password`,`textarea`]},state:{control:`select`,options:[`default`,`hover`,`focus`,`disabled`]},invalid:{control:`boolean`},disabled:{control:`boolean`}},render:e=>a(e)},s={args:{type:`text`,placeholder:`Как к вам обращаться`}},c={args:{type:`email`,placeholder:`name@mail.ru`}},l={args:{type:`password`,placeholder:`Пароль`,value:`sova-2026`}},u={args:{type:`textarea`,placeholder:`Опишите вопрос, чем подробнее, тем лучше`}},d={args:{type:`email`,value:`ilya@mail`,invalid:!0}},f={args:{type:`text`,placeholder:`Недоступно`,disabled:!0}},p={render:()=>t([`default`,`hover`,`focus`,`disabled`].map(e=>n(e,a({type:`email`,placeholder:`name@mail.ru`,state:e}))).concat([n(`invalid`,a({type:`email`,value:`ilya@mail`,invalid:!0}))]),{gap:16})},m=[`Text`,`Email`,`Password`,`Textarea`,`Invalid`,`Disabled`,`States`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Как к вам обращаться'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'name@mail.ru'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Пароль',
    value: 'sova-2026'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'textarea',
    placeholder: 'Опишите вопрос, чем подробнее, тем лучше'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    value: 'ilya@mail',
    invalid: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Недоступно',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => stack(['default', 'hover', 'focus', 'disabled'].map(state => labeled(state, createInput({
    type: 'email',
    placeholder: 'name@mail.ru',
    state
  }))).concat([labeled('invalid', createInput({
    type: 'email',
    value: 'ilya@mail',
    invalid: true
  }))]), {
    gap: 16
  })
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Disabled,c as Email,d as Invalid,l as Password,p as States,s as Text,u as Textarea,m as __namedExportsOrder,o as default};