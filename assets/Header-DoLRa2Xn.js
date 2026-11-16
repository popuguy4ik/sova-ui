import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./Icon-C35lnsGL.js";import"./Button-VHlkFp9G.js";var r,i;function a(){return(a=e((()=>{t(),r=[[`features`,`Возможности`],[`team`,`Команда`],[`blog`,`Блог`],[`contacts`,`Контакты`]],i=({active:e=`features`,logoSrc:t=`./static/logo.svg`,loggedIn:i=!1,compact:a=!1}={})=>{let o=document.createElement(`header`);return o.className=`header${a?` header--compact`:``}`,o.innerHTML=`
    <div class="header__inner">
      <a href="#" class="header__logo" aria-label="Сова, на главную"><img src="${t}" alt="" width="36" height="36"><span>Сова</span></a>
      <nav class="header__nav" aria-label="Основная навигация">${r.map(([t,n])=>`<a href="#" class="header__link${t===e?` header__link--active`:``}"${t===e?` aria-current="page"`:``}>${n}</a>`).join(``)}</nav>
      <div class="header__actions">
        <button class="header__icon-btn" type="button" data-theme-toggle aria-label="Сменить тему">${n(`moon`,{size:20})}</button>
        ${i?`<button class="header__icon-btn" type="button" aria-label="Уведомления">${n(`bell`,{size:20})}</button><span class="header__user" aria-label="Профиль">ИГ</span>`:`<a href="#" class="btn btn--ghost btn--sm header__login">Войти</a><a href="#" class="btn btn--primary btn--sm">Скачать</a>`}
        <button class="header__icon-btn header__burger" type="button" aria-label="Открыть меню" aria-expanded="false">${n(`menu`,{size:20})}</button>
      </div>
    </div>`,o.querySelector(`[data-theme-toggle]`).addEventListener(`click`,()=>{let e=document.documentElement;e.setAttribute(`data-theme`,e.getAttribute(`data-theme`)===`dark`?`light`:`dark`)}),o}})))()}export{a as n,i as t};