import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./Icon-C35lnsGL.js";import{n as r,t as i}from"./Badge-CWX16bm4.js";var a;function o(){return(o=e((()=>{t(),r(),a=({caption:e=``,columns:t=[],rows:r=[],striped:a=!1}={})=>{let o=document.createElement(`div`);o.className=`table-wrap`;let s={key:null,dir:1},c=()=>{let c=[...r];s.key&&c.sort((e,t)=>String(e[s.key]).localeCompare(String(t[s.key]),`ru`,{numeric:!0})*s.dir),o.innerHTML=`<table class="table${a?` table--striped`:``}">
      ${e?`<caption>${e}</caption>`:``}
      <thead><tr>${t.map(e=>{let t=s.key===e.key?s.dir===1?`ascending`:`descending`:`none`;return`<th scope="col" class="${e.align===`end`?`is-end`:``}" ${e.sortable?`aria-sort="${t}"`:``}>${e.sortable?`<button type="button" data-key="${e.key}">${e.label}${n(t===`none`?`arrow-up-down`:t===`ascending`?`chevron-up`:`chevron-down`,{size:16})}</button>`:e.label}</th>`}).join(``)}</tr></thead>
      <tbody>${c.map(e=>`<tr>${t.map(t=>`<td class="${t.align===`end`?`is-end`:``}">${t.badge?``:e[t.key]}</td>`).join(``)}</tr>`).join(``)}</tbody>
    </table>`,o.querySelectorAll(`tbody tr`).forEach((e,n)=>t.forEach((t,r)=>{if(t.badge){let[a,o]=c[n][t.key];e.children[r].append(i({label:a,tone:o}))}}))};return o.addEventListener(`click`,e=>{let t=e.target.closest(`[data-key]`);t&&(s={key:t.dataset.key,dir:s.key===t.dataset.key?-s.dir:1},c(),o.querySelector(`[data-key="${s.key}"]`).focus())}),c(),o}})))()}var s,c,l,u,d,f;function p(){return(p=e((()=>{o(),s=[{key:`device`,label:`Устройство`,sortable:!0},{key:`place`,label:`Где`,sortable:!0},{key:`last`,label:`Последний вход`,sortable:!0},{key:`status`,label:`Статус`,badge:!0}],c=[{device:`iPhone 15`,place:`Москва`,last:`2026-11-16 09:12`,status:[`Этот телефон`,`success`]},{device:`MacBook Air, веб-версия`,place:`Москва`,last:`2026-11-15 22:40`,status:[`Активен`,`info`]},{device:`Windows, приложение`,place:`Казань`,last:`2026-11-02 18:05`,status:[`Давно не входил`,`warning`]},{device:`Android, Pixel 7`,place:`Неизвестно`,last:`2026-10-28 03:17`,status:[`Подозрительный`,`error`]}],l={title:`Organisms/Table`,tags:[`autodocs`],parameters:{docs:{description:{component:"Таблица с сортировкой: заголовок колонки это кнопка, состояние передается в `aria-sort`. На узком экране таблица прокручивается по горизонтали."}}},render:e=>a(e)},u={args:{caption:`Активные сеансы`,columns:s,rows:c}},d={args:{caption:`Активные сеансы`,columns:s,rows:c,striped:!0}},f=[`Devices`,`Striped`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Активные сеансы',
    columns: COLUMNS,
    rows: ROWS
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Активные сеансы',
    columns: COLUMNS,
    rows: ROWS,
    striped: true
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Devices,d as Striped,f as __namedExportsOrder,l as default};