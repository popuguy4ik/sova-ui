import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import"./iframe-CKSgEf8B.js";var t,n,r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t={title:`Foundations/Tokens`,parameters:{docs:{description:{component:"Все значения дизайн-системы. CSS-переменные генерируются Style Dictionary из JSON-токенов в папке `tokens/`. Переключите тему на панели сверху, и семантические цвета поменяются."}}}},n=e=>getComputedStyle(document.documentElement).getPropertyValue(e).trim(),r=(e,t=``,n=``)=>{let r=document.createElement(e);return r.style.cssText=t,r.innerHTML=n,r},i=`font:12px/1.4 var(--font-family-mono);color:var(--color-semantic-text-muted)`,a=e=>r(`h3`,`margin:24px 0 12px;font-size:18px`,e),o=(e,t)=>{let a=r(`div`,`display:grid;gap:6px;width:132px`),o=r(`div`,`height:72px;border-radius:12px;background:var(${t});border:1px solid var(--color-semantic-border-default)`);return a.append(o,r(`div`,`font:600 13px var(--font-family-body)`,e),r(`code`,i,t)),requestAnimationFrame(()=>a.append(r(`code`,i,n(t)))),a},s={render:()=>{let e=r(`div`);return Object.entries({Фон:[`background-default`,`background-alt`,`background-surface`,`background-night`,`background-inverse`],Текст:[`text-default`,`text-muted`,`text-placeholder`,`text-link`,`text-on-action`],"Границы и фокус":[`border-default`,`border-strong`,`border-focus`],Действия:[`action-primary`,`action-primary-hover`,`action-primary-soft`,`action-secondary`,`action-accent`,`action-danger`],Статусы:[`feedback-info`,`feedback-success`,`feedback-warning`,`feedback-error`,`feedback-success-bg`,`feedback-error-bg`]}).forEach(([t,n])=>{e.append(a(`Семантические: `+t));let i=r(`div`,`display:flex;flex-wrap:wrap;gap:16px`);n.forEach(e=>i.append(o(e,`--color-semantic-${e}`))),e.append(i)}),e}},c={render:()=>{let e=r(`div`);return Object.entries({indigo:[100,300,600,700,800],violet:[300,500],amber:[100,400,500,700,900],green:[100,400,700,900],red:[100,400,600,700,900],gray:[0,50,100,200,300,400,500,600,700,800,900,950,975]}).forEach(([t,n])=>{e.append(a(t));let i=r(`div`,`display:flex;flex-wrap:wrap;gap:12px`);n.forEach(e=>i.append(o(`${t}-${e}`,`--color-primitive-${t}-${e}`))),e.append(i)}),e}},l={render:()=>{let e=r(`div`,`display:grid;gap:4px`);return[[`5xl`,`display`,`black`],[`4xl`,`display`,`black`],[`3xl`,`display`,`bold`],[`2xl`,`display`,`bold`],[`xl`,`display`,`bold`],[`lg`,`body`,`regular`],[`base`,`body`,`regular`],[`sm`,`body`,`regular`],[`xs`,`body`,`semibold`]].forEach(([t,n,a])=>{let o=r(`div`,`display:grid;grid-template-columns:220px 1fr;align-items:baseline;gap:24px;padding:10px 0;border-bottom:1px solid var(--color-semantic-border-default)`);o.append(r(`code`,i,`--font-size-${t}<br>--font-family-${n}<br>--font-weight-${a}`)),o.append(r(`div`,`font-family:var(--font-family-${n});font-size:var(--font-size-${t});font-weight:var(--font-weight-${a});line-height:1.2`,`Сова хранит секреты`)),e.append(o)}),e}},u={render:()=>{let e=r(`div`,`display:grid;gap:12px`);return[1,2,3,4,6,8,12,16,24].forEach(t=>{let a=r(`div`,`display:flex;align-items:center;gap:16px`);a.append(r(`code`,i+`;width:80px`,`space-${t}`),r(`div`,`height:16px;width:var(--space-${t});border-radius:4px;background:var(--color-semantic-action-primary)`),r(`small`,i,`var(--space-${t}) = ${n(`--space-`+t)}`)),e.append(a)}),e}},d={name:`Radius & Shadows`,render:()=>{let e=r(`div`);e.append(a(`Радиусы`));let t=r(`div`,`display:flex;gap:24px;flex-wrap:wrap`);[`sm`,`md`,`lg`,`xl`,`pill`].forEach(e=>{let n=r(`div`,`display:grid;gap:8px;justify-items:center`);n.append(r(`div`,`width:80px;height:80px;border-radius:var(--radius-${e});background:var(--color-semantic-action-primary-soft);border:2px solid var(--color-semantic-action-primary)`),r(`code`,i,`radius-${e}`)),t.append(n)}),e.append(t,a(`Тени`));let n=r(`div`,`display:flex;gap:32px;flex-wrap:wrap;padding:8px 0 24px`);return[`sm`,`md`,`lg`,`xl`].forEach(e=>{let t=r(`div`,`display:grid;gap:12px;justify-items:center`);t.append(r(`div`,`width:140px;height:96px;border-radius:16px;background:var(--color-semantic-background-surface);box-shadow:var(--shadow-${e})`),r(`code`,i,`shadow-${e}`)),n.append(t)}),e.append(n),e}},f={render:()=>{let e=r(`div`,`display:grid;gap:16px`);return e.append(r(`p`,`margin:0;color:var(--color-semantic-text-muted)`,`Наведите на дорожку: шарик проедет с нужной длительностью и кривой <code>--motion-easing-standard</code>.`)),[`fast`,`base`,`slow`].forEach(t=>{let a=r(`div`,`display:flex;align-items:center;gap:16px`),o=r(`div`,`position:relative;width:320px;height:32px;border-radius:999px;background:var(--color-semantic-background-alt)`),s=r(`div`,`position:absolute;top:4px;left:4px;width:24px;height:24px;border-radius:999px;background:var(--color-semantic-action-primary);transition:transform var(--motion-duration-${t}) var(--motion-easing-standard)`);o.append(s),o.addEventListener(`mouseenter`,()=>{s.style.transform=`translateX(288px)`}),o.addEventListener(`mouseleave`,()=>{s.style.transform=``}),a.append(r(`code`,i+`;width:200px`,`--motion-duration-${t}`),o,r(`small`,i,n(`--motion-duration-`+t))),e.append(a)}),e}},p=[`Colors`,`Primitives`,`Typography`,`Spacing`,`RadiusAndShadows`,`Motion`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = el('div');
    const groups = {
      'Фон': ['background-default', 'background-alt', 'background-surface', 'background-night', 'background-inverse'],
      'Текст': ['text-default', 'text-muted', 'text-placeholder', 'text-link', 'text-on-action'],
      'Границы и фокус': ['border-default', 'border-strong', 'border-focus'],
      'Действия': ['action-primary', 'action-primary-hover', 'action-primary-soft', 'action-secondary', 'action-accent', 'action-danger'],
      'Статусы': ['feedback-info', 'feedback-success', 'feedback-warning', 'feedback-error', 'feedback-success-bg', 'feedback-error-bg']
    };
    Object.entries(groups).forEach(([g, list]) => {
      wrap.append(title('Семантические: ' + g));
      const row = el('div', 'display:flex;flex-wrap:wrap;gap:16px');
      list.forEach(n => row.append(swatch(n, \`--color-semantic-\${n}\`)));
      wrap.append(row);
    });
    return wrap;
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = el('div');
    const P = {
      indigo: [100, 300, 600, 700, 800],
      violet: [300, 500],
      amber: [100, 400, 500, 700, 900],
      green: [100, 400, 700, 900],
      red: [100, 400, 600, 700, 900],
      gray: [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 975]
    };
    Object.entries(P).forEach(([hue, steps]) => {
      wrap.append(title(hue));
      const row = el('div', 'display:flex;flex-wrap:wrap;gap:12px');
      steps.forEach(s => row.append(swatch(\`\${hue}-\${s}\`, \`--color-primitive-\${hue}-\${s}\`)));
      wrap.append(row);
    });
    return wrap;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = el('div', 'display:grid;gap:4px');
    [['5xl', 'display', 'black'], ['4xl', 'display', 'black'], ['3xl', 'display', 'bold'], ['2xl', 'display', 'bold'], ['xl', 'display', 'bold'], ['lg', 'body', 'regular'], ['base', 'body', 'regular'], ['sm', 'body', 'regular'], ['xs', 'body', 'semibold']].forEach(([s, f, w]) => {
      const row = el('div', 'display:grid;grid-template-columns:220px 1fr;align-items:baseline;gap:24px;padding:10px 0;border-bottom:1px solid var(--color-semantic-border-default)');
      row.append(el('code', mono, \`--font-size-\${s}<br>--font-family-\${f}<br>--font-weight-\${w}\`));
      row.append(el('div', \`font-family:var(--font-family-\${f});font-size:var(--font-size-\${s});font-weight:var(--font-weight-\${w});line-height:1.2\`, 'Сова хранит секреты'));
      wrap.append(row);
    });
    return wrap;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = el('div', 'display:grid;gap:12px');
    [1, 2, 3, 4, 6, 8, 12, 16, 24].forEach(n => {
      const row = el('div', 'display:flex;align-items:center;gap:16px');
      row.append(el('code', mono + ';width:80px', \`space-\${n}\`), el('div', \`height:16px;width:var(--space-\${n});border-radius:4px;background:var(--color-semantic-action-primary)\`), el('small', mono, \`var(--space-\${n}) = \${css('--space-' + n)}\`));
      wrap.append(row);
    });
    return wrap;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Radius & Shadows',
  render: () => {
    const wrap = el('div');
    wrap.append(title('Радиусы'));
    const r = el('div', 'display:flex;gap:24px;flex-wrap:wrap');
    ['sm', 'md', 'lg', 'xl', 'pill'].forEach(n => {
      const c = el('div', 'display:grid;gap:8px;justify-items:center');
      c.append(el('div', \`width:80px;height:80px;border-radius:var(--radius-\${n});background:var(--color-semantic-action-primary-soft);border:2px solid var(--color-semantic-action-primary)\`), el('code', mono, \`radius-\${n}\`));
      r.append(c);
    });
    wrap.append(r, title('Тени'));
    const s = el('div', 'display:flex;gap:32px;flex-wrap:wrap;padding:8px 0 24px');
    ['sm', 'md', 'lg', 'xl'].forEach(n => {
      const c = el('div', 'display:grid;gap:12px;justify-items:center');
      c.append(el('div', \`width:140px;height:96px;border-radius:16px;background:var(--color-semantic-background-surface);box-shadow:var(--shadow-\${n})\`), el('code', mono, \`shadow-\${n}\`));
      s.append(c);
    });
    wrap.append(s);
    return wrap;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = el('div', 'display:grid;gap:16px');
    wrap.append(el('p', 'margin:0;color:var(--color-semantic-text-muted)', 'Наведите на дорожку: шарик проедет с нужной длительностью и кривой <code>--motion-easing-standard</code>.'));
    ['fast', 'base', 'slow'].forEach(n => {
      const row = el('div', 'display:flex;align-items:center;gap:16px');
      const track = el('div', 'position:relative;width:320px;height:32px;border-radius:999px;background:var(--color-semantic-background-alt)');
      const dot = el('div', \`position:absolute;top:4px;left:4px;width:24px;height:24px;border-radius:999px;background:var(--color-semantic-action-primary);transition:transform var(--motion-duration-\${n}) var(--motion-easing-standard)\`);
      track.append(dot);
      track.addEventListener('mouseenter', () => {
        dot.style.transform = 'translateX(288px)';
      });
      track.addEventListener('mouseleave', () => {
        dot.style.transform = '';
      });
      row.append(el('code', mono + ';width:200px', \`--motion-duration-\${n}\`), track, el('small', mono, css('--motion-duration-' + n)));
      wrap.append(row);
    });
    return wrap;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{s as Colors,f as Motion,c as Primitives,d as RadiusAndShadows,u as Spacing,l as Typography,p as __namedExportsOrder,t as default};