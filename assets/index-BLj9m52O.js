var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{})),r,i=e((()=>{n(),r=class{constructor(){this.Header=[`Сегодня`,`Белок`]}set Header([e,t]){this._Header=`
    <header class="header">
        <div>
            <div class="greeting">${e}</div>
            <h1>${t}</h1>
        </div>

        <button class="icon-button">⚙</button>
    </header>`}render(){return this._Header}}})),a=e((()=>{})),o,s=e((()=>{a(),o=class{constructor(){this.Progress=[90,120,`г`,`Цель на сегодня`,`Осталось`]}set Progress([e,t,n,r,i]){this._Progress=`
    <section class="progress-card">

        <div class="progress-circle">
            <div class="circle-inner">
                <strong>${e}</strong>
                <span>из ${t+` `+n}</span>
            </div>
        </div>

        <div class="progress-info">
            <span class="label">${r}</span>

            <div class="big-number">
                ${t} <small>${n}</small>
            </div>

            <div class="remaining">
                ${i} <strong>${t-e+` `+n} </strong>
            </div>

            <div class="progress-bar">
                <div class="progress-value"></div>
            </div>

            <span class="percent">${e*100/t}%</span>
        </div>

    </section>`}render(){return this._Progress}}}));t((()=>{i(),s();var e=new r,t=new o,n=e.render()+t.render();document.querySelector(`#app`).innerHTML=n}))();