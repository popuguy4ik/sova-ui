import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,t as n}from"./story-B4_R5Lf5.js";var r,i;function a(){return(a=e((()=>{r=0,i=({label:e=`Настройка`,checked:t=!1,disabled:n=!1,state:i=`default`}={})=>{let a=`switch-${++r}`,o=document.createElement(`label`);o.className=[`switch`,i===`focus`?`is-focus`:``].filter(Boolean).join(` `),o.htmlFor=a,o.innerHTML=`<span class="switch__label">${e}</span><input class="switch__input" type="checkbox" role="switch" id="${a}"><span class="switch__track" aria-hidden="true"><span class="switch__thumb"></span></span>`;let s=o.querySelector(`input`);return s.checked=t,s.disabled=n||i===`disabled`,o}})))()}var o,s,c,l,u,d;function f(){return(f=e((()=>{a(),n(),o={title:`Atoms/Switch`,tags:[`autodocs`],argTypes:{state:{control:`select`,options:[`default`,`focus`,`disabled`]}},render:e=>i(e)},s={args:{label:`Исчезающие сообщения`}},c={args:{label:`Исчезающие сообщения`,checked:!0}},l={args:{label:`Резервная копия`,disabled:!0}},u={name:`Список настроек`,render:()=>{let e=t([i({label:`Уведомления`,checked:!0}),i({label:`Звук сообщений`,checked:!0}),i({label:`Исчезающие сообщения`}),i({label:`В фокусе`,state:`focus`}),i({label:`Резервная копия в облаке`,disabled:!0})],{gap:16});return e.style.maxWidth=`360px`,e.querySelectorAll(`.switch`).forEach(e=>{e.style.display=`flex`}),e}},d=[`Off`,`On`,`Disabled`,`Settings`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Исчезающие сообщения'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Исчезающие сообщения',
    checked: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Резервная копия',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Список настроек',
  render: () => {
    const list = stack([createSwitch({
      label: 'Уведомления',
      checked: true
    }), createSwitch({
      label: 'Звук сообщений',
      checked: true
    }), createSwitch({
      label: 'Исчезающие сообщения'
    }), createSwitch({
      label: 'В фокусе',
      state: 'focus'
    }), createSwitch({
      label: 'Резервная копия в облаке',
      disabled: true
    })], {
      gap: 16
    });
    list.style.maxWidth = '360px';
    list.querySelectorAll('.switch').forEach(s => {
      s.style.display = 'flex';
    });
    return list;
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Disabled,s as Off,c as On,u as Settings,d as __namedExportsOrder,o as default};