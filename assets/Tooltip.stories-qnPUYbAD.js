import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t,t as n}from"./story-B4_R5Lf5.js";import{i as r,t as i}from"./Icon-C35lnsGL.js";import{n as a,t as o}from"./Button-GeRw_Tps.js";var s,c;function l(){return(l=e((()=>{s=0,c=({text:e=`Подсказка`,trigger:t,placement:n=`top`,open:r=!1}={})=>{let i=`tooltip-${++s}`,a=document.createElement(`span`);a.className=`tooltip tooltip--${n}${r?` is-open`:``}`;let o=t||Object.assign(document.createElement(`button`),{type:`button`,className:`btn btn--secondary btn--sm`,textContent:`Наведите`});o.setAttribute(`aria-describedby`,i);let c=document.createElement(`span`);return c.className=`tooltip__bubble`,c.id=i,c.setAttribute(`role`,`tooltip`),c.textContent=e,a.append(o,c),o.addEventListener(`keydown`,e=>{e.key===`Escape`&&a.classList.add(`is-dismissed`)}),a.addEventListener(`mouseleave`,()=>a.classList.remove(`is-dismissed`)),o.addEventListener(`blur`,()=>a.classList.remove(`is-dismissed`)),a}})))()}var u,d,f,p,m;function h(){return(h=e((()=>{l(),a(),r(),n(),u={title:`Molecules/Tooltip`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Подсказка появляется при наведении и при фокусе с клавиатуры, Esc ее скрывает.`}}},argTypes:{placement:{control:`inline-radio`,options:[`top`,`bottom`,`right`]},open:{control:`boolean`}},render:e=>{let t=document.createElement(`div`);return t.style.padding=`64px 120px`,t.append(c({...e,trigger:o({label:`Код безопасности`,variant:`secondary`,size:`sm`})})),t}},d={args:{text:`Сравните 60 цифр с кодом на телефоне собеседника`,placement:`top`,open:!0}},f={args:{text:`Сообщение доставлено`,placement:`bottom`,open:!0}},p={name:`На кнопке-иконке`,render:()=>{let e=document.createElement(`button`);e.type=`button`,e.className=`btn btn--ghost btn--sm`,e.setAttribute(`aria-label`,`Настройки`),e.append(i({name:`settings`,size:20}));let n=document.createElement(`div`);return n.style.padding=`48px`,n.append(t([c({text:`Настройки чата`,trigger:e,placement:`right`,open:!0})])),n}},m=[`Top`,`Bottom`,`OnIconButton`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Сравните 60 цифр с кодом на телефоне собеседника',
    placement: 'top',
    open: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Сообщение доставлено',
    placement: 'bottom',
    open: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'На кнопке-иконке',
  render: () => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn--ghost btn--sm';
    btn.setAttribute('aria-label', 'Настройки');
    btn.append(createIcon({
      name: 'settings',
      size: 20
    }));
    const wrap = document.createElement('div');
    wrap.style.padding = '48px';
    wrap.append(row([createTooltip({
      text: 'Настройки чата',
      trigger: btn,
      placement: 'right',
      open: true
    })]));
    return wrap;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Bottom,p as OnIconButton,d as Top,m as __namedExportsOrder,u as default};