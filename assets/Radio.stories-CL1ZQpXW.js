import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import"./Checkbox-ZMuMRb1s.js";var t,n,r;function i(){return(i=e((()=>{t=0,n=({label:e=`Вариант`,name:n=`radio`,value:r=``,checked:i=!1,disabled:a=!1}={})=>{let o=`radio-${++t}`,s=document.createElement(`label`);s.className=`choice choice--radio`,s.htmlFor=o,s.innerHTML=`<input class="choice__input" type="radio" id="${o}" name="${n}" value="${r||e}"><span class="choice__box" aria-hidden="true"></span><span class="choice__label">${e}</span>`;let c=s.querySelector(`input`);return c.checked=i,c.disabled=a,s},r=({legend:e=`Группа`,name:t=`group`,options:r=[],value:i=``}={})=>{let a=document.createElement(`fieldset`);return a.className=`radio-group`,a.innerHTML=`<legend class="radio-group__legend">${e}</legend>`,r.forEach(e=>a.append(n({label:e,name:t,checked:e===i}))),a}})))()}var a,o,s,c,l,u;function d(){return(d=e((()=>{i(),a={title:`Atoms/Radio`,tags:[`autodocs`],render:e=>n(e)},o={args:{label:`Все`,name:`demo`}},s={args:{label:`Все`,name:`demo2`,checked:!0}},c={args:{label:`Никто`,name:`demo3`,disabled:!0}},l={args:{legend:`Кто видит мой номер`,name:`privacy`,options:[`Все`,`Мои контакты`,`Никто`],value:`Мои контакты`},render:e=>r(e)},u=[`Default`,`Checked`,`Disabled`,`Group`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Все',
    name: 'demo'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Все',
    name: 'demo2',
    checked: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Никто',
    name: 'demo3',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Кто видит мой номер',
    name: 'privacy',
    options: ['Все', 'Мои контакты', 'Никто'],
    value: 'Мои контакты'
  },
  render: args => createRadioGroup(args)
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as Checked,o as Default,c as Disabled,l as Group,u as __namedExportsOrder,a as default};