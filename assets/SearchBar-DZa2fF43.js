import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./Icon-C35lnsGL.js";import"./Button-VHlkFp9G.js";var r;function i(){return(i=e((()=>{t(),r=({placeholder:e=`Поиск по чатам`,value:t=``,buttonLabel:r=`Найти`,showButton:i=!0,onSearch:a}={})=>{let o=document.createElement(`form`);o.className=`search`,o.setAttribute(`role`,`search`),o.innerHTML=`
    <div class="search__field">
      ${n(`search`,{size:20})}
      <label class="visually-hidden" for="q">${e}</label>
      <input class="search__input" id="q" type="search" name="q" placeholder="${e}" autocomplete="off">
      <button class="search__clear" type="button" aria-label="Очистить">${n(`x`,{size:18})}</button>
    </div>
    ${i?`<button class="btn btn--primary btn--md" type="submit">${r}</button>`:``}`;let s=o.querySelector(`input`),c=o.querySelector(`.search__clear`);s.value=t;let l=()=>{c.hidden=!s.value};return s.addEventListener(`input`,l),c.addEventListener(`click`,()=>{s.value=``,l(),s.focus()}),o.addEventListener(`submit`,e=>{e.preventDefault(),a&&a(s.value)}),l(),o}})))()}export{i as n,r as t};