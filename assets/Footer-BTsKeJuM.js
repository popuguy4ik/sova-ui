import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./Icon-C35lnsGL.js";var r,i;function a(){return(a=e((()=>{t(),r=[[`Продукт`,[`Возможности`,`Веб-версия`,`Скачать`]],[`Компания`,[`Команда`,`Блог`,`Контакты`]],[`Помощь`,[`Поддержка`,`Как работает шифрование`,`hello@sova.example`]]],i=({logoSrc:e=`./static/logo.svg`,note:t=`Учебный проект, ЛР № 4 по веб-дизайну`}={})=>{let i=document.createElement(`footer`);return i.className=`footer`,i.innerHTML=`
    <div class="footer__inner">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="#" class="footer__logo"><img src="${e}" alt="" width="32" height="32"><span>Сова</span></a>
          <p>Мессенджер со сквозным шифрованием, который работает даже на слабом интернете.</p>
          <div class="footer__social">
            ${[[`mail`,`Почта`],[`rss`,`Блог`],[`message-circle`,`Поддержка`]].map(([e,t])=>`<a href="#" class="footer__social-link" aria-label="${t}">${n(e,{size:20})}</a>`).join(``)}
          </div>
        </div>
        ${r.map(([e,t])=>`<nav aria-label="${e}"><h2 class="footer__title">${e}</h2><ul class="footer__list">${t.map(e=>`<li><a href="#">${e}</a></li>`).join(``)}</ul></nav>`).join(``)}
      </div>
      <div class="footer__bottom"><span>© 2026 Сова</span><span>${t}</span></div>
    </div>`,i}})))()}export{a as n,i as t};