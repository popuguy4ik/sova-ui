import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,n,t as r}from"./Icon-C35lnsGL.js";var i,a,o,s,c;function l(){return(l=e((()=>{t(),i={title:`Atoms/Icon`,tags:[`autodocs`],parameters:{docs:{description:{component:"Иконки Lucide, 24×24, обводка 2 px. Цвет берется из `currentColor`, поэтому иконка красится вместе с текстом."}}},argTypes:{name:{control:`select`,options:n},size:{control:{type:`select`},options:[16,20,24,32]},label:{control:`text`,description:`Подпись для скринридера; пустая строка делает иконку декоративной`}},render:e=>r(e)},a={args:{name:`shield-check`,size:24,label:``}},o={render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display:flex;gap:24px;align-items:end;color:var(--color-semantic-action-primary)`,[16,20,24,32].forEach(t=>e.append(r({name:`shield-check`,size:t}))),e}},s={render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:12px`,n.forEach(t=>{let n=document.createElement(`div`);n.style.cssText=`display:grid;justify-items:center;gap:6px;padding:12px;border:1px solid var(--color-semantic-border-default);border-radius:12px;font:12px var(--font-family-body);color:var(--color-semantic-text-muted)`,n.append(r({name:t}),t),n.firstChild.style.color=`var(--color-semantic-text-default)`,e.append(n)}),e}},c=[`Default`,`Sizes`,`Gallery`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'shield-check',
    size: 24,
    label: ''
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:24px;align-items:end;color:var(--color-semantic-action-primary)';
    [16, 20, 24, 32].forEach(s => wrap.append(createIcon({
      name: 'shield-check',
      size: s
    })));
    return wrap;
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:12px';
    iconNames.forEach(n => {
      const cell = document.createElement('div');
      cell.style.cssText = 'display:grid;justify-items:center;gap:6px;padding:12px;border:1px solid var(--color-semantic-border-default);border-radius:12px;font:12px var(--font-family-body);color:var(--color-semantic-text-muted)';
      cell.append(createIcon({
        name: n
      }), n);
      cell.firstChild.style.color = 'var(--color-semantic-text-default)';
      wrap.append(cell);
    });
    return wrap;
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{a as Default,s as Gallery,o as Sizes,c as __namedExportsOrder,i as default};