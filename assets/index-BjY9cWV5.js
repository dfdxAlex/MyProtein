var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{})),r,i=e((()=>{n(),r=class{constructor(){this.Header=[`Сегодня`,`Белок`]}set Header([e,t]){this._Header=`
    <header class="header">
        <div>
            <div class="greeting">${e}</div>
            <h1>${t}</h1>
        </div>

        <button class="icon-button">⚙</button>
    </header>`}render(){return this._Header}}})),a=e((()=>{})),o,s=e((()=>{a(),o=class{constructor(){this.Progress=[90,120,`г`,`Цель на сегодня`,`Осталось`]}set Progress([e,t,n,r,i]){if(typeof t==`number`&&t>0)this.norm=t;else throw Error(`Неверное значение norm`);if(typeof e==`number`&&e>0&&e<=this.norm)this.availability=e;else throw Error(`Неверное значение availability`);if(typeof n==`string`)this.gramm=n;else throw Error(`Неверное значение gramm`);if(typeof r==`string`)this.goal=r;else throw Error(`Неверное значение goal`);if(typeof i==`string`)this.left=i;else throw Error(`Неверное значение left`);this.progressValue=Math.round(this.availability*100/this.norm),this.#e()}#e(){this._Progress=this.#t()}#t(){return`
    <section class="progress-card">

                <div class="progress-card progress-card--circle">
                    <div class="circle-inner">
                        <strong>${this.availability}</strong>
                        <span>из ${this.norm+` `+this.gramm}</span>
                    </div>
                </div>

                <div class="progress-info">
                    <span class="label">${this.goal}</span>

                    <div class="big-number">
                        ${this.norm} <small>${this.gramm}</small>
                    </div>

                    <div class="remaining">
                        ${this.left} <strong>${this.norm-this.availability+` `+this.gramm} </strong>
                    </div>

                    <div class="progress-bar">
                        <div class="progress-value"></div>
                    </div>

                    <span class="percent">${this.progressValue}%</span>
                </div>

            </section>
    `}get ProgressDeg(){return this.availability*360/this.norm+`deg`}get ProgressValue(){return this.progressValue+`%`}render(){return this._Progress}static help(){console.log(`
            // Сетер Progress:
            // параметр 1: Сколько белка съедено
            // параметр 2: Сколько белка нужно съесть
            // параметр 3: Символ для обозначения граммов
            // параметр 4: Символ для строки 'Цель на сегодня'
            // параметр 5: Символ для строки 'Осталось'
            // Параметры 3,4,5 для переводов на другие языки или для непредвиденных целей

            // Геттер ProgressDeg возвращает число градусов на круговой диаграмме

            // Геттер ProgressValue возвращает число процентов на горизонтальном баре
        `)}static helpEN(){console.log(`
            // Progress setter:
            // Parameter 1: Amount of protein consumed
            // Parameter 2: Amount of protein to consume
            // Parameter 3: Symbol for grams
            // Parameter 4: Symbol for the string 'Today's goal'
            // Parameter 5: Symbol for the string 'Remaining'
            // Parameters 3, 4, and 5 are for translations into other languages ​​or for unexpected purposes

            // The ProgressDeg getter returns the number of degrees on a pie chart

            // The ProgressValue getter returns the number of percents on a horizontal bar
        `)}}}));t((()=>{i(),s();var e=new r,t=new o;t.Progress=[15,150,`г`,`Цель на сегодня`,`Ещё`];var n=e.render()+t.render();document.querySelector(`#app`).innerHTML=n,document.querySelector(`.progress-card--circle`).style.setProperty(`--progress-circle`,t.ProgressDeg),document.querySelector(`.progress-value`).style.setProperty(`--progress-bar`,t.ProgressValue)}))();