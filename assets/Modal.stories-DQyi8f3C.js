import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./Icon-C35lnsGL.js";import{n as r,t as i}from"./Button-GeRw_Tps.js";var a,o;function s(){return(s=e((()=>{t(),r(),a=0,o=({title:e=`Заголовок`,text:t=``,confirmLabel:r=`Подтвердить`,cancelLabel:o=`Отмена`,tone:s=`default`,onConfirm:c}={})=>{let l=`modal-${++a}`,u=document.createElement(`dialog`);u.className=`modal modal--${s}`,u.setAttribute(`aria-labelledby`,`${l}-title`),u.setAttribute(`aria-describedby`,`${l}-text`),u.innerHTML=`
    <div class="modal__box">
      <button class="modal__close" type="button" aria-label="Закрыть">${n(`x`,{size:20})}</button>
      ${s===`danger`?`<span class="modal__icon">${n(`triangle-alert`,{size:24})}</span>`:``}
      <h2 class="modal__title" id="${l}-title">${e}</h2>
      <p class="modal__text" id="${l}-text">${t}</p>
      <div class="modal__actions"></div>
    </div>`;let d=u.querySelector(`.modal__actions`),f=i({label:o,variant:`ghost`}),p=i({label:r,variant:s===`danger`?`danger`:`primary`});return d.append(f,p),f.addEventListener(`click`,()=>u.close(`cancel`)),p.addEventListener(`click`,()=>{c&&c(),u.close(`ok`)}),u.querySelector(`.modal__close`).addEventListener(`click`,()=>u.close(`cancel`)),u.addEventListener(`click`,e=>{e.target===u&&u.close(`cancel`)}),u}})))()}var c,l,u,d,f,p;function m(){return(m=e((()=>{s(),r(),c={title:`Organisms/Modal`,tags:[`autodocs`],parameters:{docs:{description:{component:"Модальное окно на нативном `<dialog>`: фокус остается внутри, Esc и клик по фону закрывают окно. Вариант `danger` для необратимых действий."}}},argTypes:{tone:{control:`inline-radio`,options:[`default`,`danger`]}}},l=e=>{let t=o(e);return t.classList.add(`modal--inline`),t.setAttribute(`open`,``),t},u={args:{title:`Подключить компьютер?`,text:`Отсканируйте QR-код на экране компьютера в приложении Сова. Сеанс завершится сам через 7 дней без активности.`,confirmLabel:`Подключить`,tone:`default`},render:l},d={args:{title:`Удалить чат с Аней?`,text:`История сообщений удалится на всех ваших устройствах. Это действие нельзя отменить.`,confirmLabel:`Удалить`,tone:`danger`},render:l},f={name:`Открытие по кнопке`,render:()=>{let e=document.createElement(`div`),t=o({title:`Выйти из аккаунта?`,text:`Чтобы снова войти, понадобится код из СМС.`,confirmLabel:`Выйти`,tone:`danger`}),n=i({label:`Выйти из аккаунта`,variant:`danger`,icon:`log-out`});return n.addEventListener(`click`,()=>t.showModal()),e.append(n,t),e}},p=[`Default`,`Danger`,`Interactive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Подключить компьютер?',
    text: 'Отсканируйте QR-код на экране компьютера в приложении Сова. Сеанс завершится сам через 7 дней без активности.',
    confirmLabel: 'Подключить',
    tone: 'default'
  },
  render: inline
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Удалить чат с Аней?',
    text: 'История сообщений удалится на всех ваших устройствах. Это действие нельзя отменить.',
    confirmLabel: 'Удалить',
    tone: 'danger'
  },
  render: inline
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Открытие по кнопке',
  render: () => {
    const wrap = document.createElement('div');
    const dlg = createModal({
      title: 'Выйти из аккаунта?',
      text: 'Чтобы снова войти, понадобится код из СМС.',
      confirmLabel: 'Выйти',
      tone: 'danger'
    });
    const btn = createButton({
      label: 'Выйти из аккаунта',
      variant: 'danger',
      icon: 'log-out'
    });
    btn.addEventListener('click', () => dlg.showModal());
    wrap.append(btn, dlg);
    return wrap;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Danger,u as Default,f as Interactive,p as __namedExportsOrder,c as default};