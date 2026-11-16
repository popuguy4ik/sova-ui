import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,t as n}from"./story-B4_R5Lf5.js";import{n as r,t as i}from"./FormField-DAvfqgvF.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),n(),a={title:`Molecules/FormField`,tags:[`autodocs`],parameters:{docs:{description:{component:"Label + Input + helper text + error. Ошибка и подсказка связаны с полем через `aria-describedby`."}}},argTypes:{type:{control:`inline-radio`,options:[`text`,`email`,`password`,`textarea`]}},render:e=>i(e)},o={args:{label:`Имя`,placeholder:`Как к вам обращаться`}},s={args:{label:`Пароль`,type:`password`,helper:`Минимум 8 символов, буквы и цифры`,required:!0}},c={args:{label:`Почта`,type:`email`,value:`ilya@mail`,error:`Проверьте адрес, например: name@mail.ru`,required:!0}},l={args:{label:`Номер телефона`,value:`+7 900 000-00-00`,helper:`Номер можно сменить только в приложении`,disabled:!0}},u={render:()=>t([i({label:`Имя`,placeholder:`Как к вам обращаться`}),i({label:`Почта`,type:`email`,value:`ilya@mail`,error:`Проверьте адрес, например: name@mail.ru`,required:!0}),i({label:`Пароль`,type:`password`,helper:`Минимум 8 символов`,required:!0})])},d=[`Default`,`WithHelper`,`WithError`,`Disabled`,`Overview`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Имя',
    placeholder: 'Как к вам обращаться'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Пароль',
    type: 'password',
    helper: 'Минимум 8 символов, буквы и цифры',
    required: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Почта',
    type: 'email',
    value: 'ilya@mail',
    error: 'Проверьте адрес, например: name@mail.ru',
    required: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Номер телефона',
    value: '+7 900 000-00-00',
    helper: 'Номер можно сменить только в приложении',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => stack([createFormField({
    label: 'Имя',
    placeholder: 'Как к вам обращаться'
  }), createFormField({
    label: 'Почта',
    type: 'email',
    value: 'ilya@mail',
    error: 'Проверьте адрес, например: name@mail.ru',
    required: true
  }), createFormField({
    label: 'Пароль',
    type: 'password',
    helper: 'Минимум 8 символов',
    required: true
  })])
}`,...u.parameters?.docs?.source}}}})))()}f();export{o as Default,l as Disabled,u as Overview,c as WithError,s as WithHelper,d as __namedExportsOrder,a as default};