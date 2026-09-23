var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{})),r,i=e((()=>{n(),r=class{constructor(){this.Header=[`Сегодня`,`Белок`]}set Header([e,t]){this._Header=`
    <header class="header">
        <div>
            <div class="greeting">${e}</div>
            <h1>${t}</h1>
        </div>

        <button class="icon-button">⚙</button>
    </header>`}render(){document.querySelector(`#menu-up`).innerHTML=this._Header}}})),a,o=e((()=>{i(),a=class{constructor(){this.homeWiev=new r}init(){this.homeWiev.render()}}})),s=e((()=>{})),c,l=e((()=>{s(),c=class{constructor(){this.Progress=[90,120,`г`,`Цель на сегодня`,`Осталось`]}set Progress([e,t,n,r,i]){if(typeof t==`number`&&t>0)this.norm=t;else throw Error(`Неверное значение norm`);if(typeof e==`number`&&e>0&&e<=this.norm)this.availability=e;else throw Error(`Неверное значение availability`);if(typeof n==`string`)this.gramm=n;else throw Error(`Неверное значение gramm`);if(typeof r==`string`)this.goal=r;else throw Error(`Неверное значение goal`);if(typeof i==`string`)this.left=i;else throw Error(`Неверное значение left`);this.progressValue=Math.round(this.availability*100/this.norm),this.#e()}#e(){this._Progress=this.#t()}#t(){return`
    <section class="progress-card">

                <div class="progress-card--circle">
                        <strong">${this.availability}</strong>
                        <span">из ${this.norm+` `+this.gramm}</span>
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
    `}get ProgressDeg(){return this.availability*360/this.norm+`deg`}get ProgressValue(){return this.progressValue+`%`}render(){document.querySelector(`#progress-card`).innerHTML=this._Progress}static help(){console.log(`
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
        `)}}})),u,d=e((()=>{l(),u=class{constructor(){this.progressCard=new c}init(){this.progressCard.Progress=[55,150,`г`,`Цель на сегодня`,`Ещё`],this.progressCard.render(),document.querySelector(`.progress-card--circle`).style.setProperty(`--progress-circle`,this.progressCard.ProgressDeg),document.querySelector(`.progress-value`).style.setProperty(`--progress-bar`,this.progressCard.ProgressValue)}}})),f=e((()=>{})),p,m=e((()=>{f(),p=class{#e(e){return`
        <section class="quick-section">
            <div class="section-title">
                <h2>Быстро добавить</h2>
            </div>

            <div class="quick-list">
                ${e.reduce((e=``,t)=>t.icon!==`➕`&&t.icon!==`➖`?e+`  <button class="quick-item">
                            <span class="food-icon">${t.icon}</span>
                            <span>
                                <strong>${t.name}</strong>
                                <small>+ ${t.protein} г</small>
                            </span>
                        </button>
                    `:e+`  <button class="quick-item" data-category-btn>
                            <span class="food-icon">${t.icon}</span>
                            <span>
                                <strong>${t.name}</strong>
                            </span>
                        </button>
                    `,``)}
            </div>
        </section>
    `}render(e){document.querySelector(`#quick-add`).innerHTML=this.#e(e)}bindEvents(){let e=document.querySelectorAll(`[data-category-btn]`);console.log(e[0].innerText),console.log(e[1].innerText),e[0].addEventListener(`click`,()=>{document.body.innerHTML=this.quickMenuItemsWievCategor}),document.addEventListener(`click`,e=>{})}injectQuickMenuItemsWievCategor(e){this.quickMenuItemsWievCategor=e}}})),h,g=e((()=>{h=class{startProducts(){return[{icon:`🥚`,name:`Яйцо`,protein:12.5,fat:10.5,carbs:1,fiber:0,calories:155},{icon:`🍗`,name:`Курица`,protein:23,fat:2,carbs:0,fiber:0,calories:110},{icon:`🥛`,name:`Творог`,protein:18,fat:5,carbs:3,fiber:0,calories:145},{icon:`➕`,name:`Добавить`,protein:``,fat:0,carbs:0,fiber:0,calories:0},{icon:`➖`,name:`Убрать`,protein:``,fat:0,carbs:0,fiber:0,calories:0}]}meatProducts(){return[{name:`Куриная грудка`,icon:`🍗`,protein:23,fat:2,carbs:0,fiber:0,calories:110},{name:`Куриное бедро`,icon:`🍖`,protein:19,fat:9,carbs:0,fiber:0,calories:170},{name:`Куриные крылья`,icon:`🪽`,protein:18,fat:14,carbs:0,fiber:0,calories:210},{name:`Индейка филе`,icon:`🦃`,protein:22,fat:4,carbs:0,fiber:0,calories:120},{name:`Говядина постная`,icon:`🥩`,protein:26,fat:8,carbs:0,fiber:0,calories:160},{name:`Говяжий фарш`,icon:`🍖`,protein:17,fat:15,carbs:0,fiber:0,calories:215},{name:`Стейк рибай`,icon:`🦬`,protein:24,fat:20,carbs:0,fiber:0,calories:290},{name:`Свинина постная`,icon:`🐖`,protein:21,fat:6,carbs:0,fiber:0,calories:140},{name:`Свиной стейк`,icon:`🍖`,protein:20,fat:12,carbs:0,fiber:0,calories:200},{name:`Бекон`,icon:`🥓`,protein:14,fat:42,carbs:1,fiber:0,calories:450},{name:`Сосиски`,icon:`🌭`,protein:12,fat:20,carbs:2,fiber:0,calories:250},{name:`Колбаса`,icon:`🥙`,protein:17,fat:25,carbs:2,fiber:0,calories:300},{name:`Ветчина`,icon:`🍖`,protein:18,fat:6,carbs:1,fiber:0,calories:135},{name:`Котлета мясная`,icon:`🍔`,protein:16,fat:14,carbs:5,fiber:0,calories:220},{name:`Фарш смешанный`,icon:`🧆`,protein:17,fat:18,carbs:0,fiber:0,calories:240},{name:`Лосось`,icon:`🐟`,protein:20,fat:13,carbs:0,fiber:0,calories:208},{name:`Тунец`,icon:`🐠`,protein:23,fat:1,carbs:0,fiber:0,calories:110},{name:`Треска`,icon:`🐡`,protein:18,fat:1,carbs:0,fiber:0,calories:82},{name:`Скумбрия`,icon:`🐋`,protein:19,fat:14,carbs:0,fiber:0,calories:205},{name:`Креветки`,icon:`🦐`,protein:24,fat:.5,carbs:0,fiber:0,calories:99},{name:`Мидии`,icon:`🦪`,protein:12,fat:2,carbs:3,fiber:0,calories:86},{name:`Яйца куриные`,icon:`🥚`,protein:12.5,fat:10.5,carbs:1,fiber:0,calories:155},{name:`Яичный белок`,icon:`⚪`,protein:11,fat:0,carbs:.7,fiber:0,calories:48},{name:`Яичный желток`,icon:`🟡`,protein:16,fat:27,carbs:3.5,fiber:0,calories:322},{name:`Печень куриная`,icon:`🫀`,protein:20,fat:6,carbs:1,fiber:0,calories:135},{name:`Печень говяжья`,icon:`🫁`,protein:21,fat:3.5,carbs:4,fiber:0,calories:140},{name:`Сердце куриное`,icon:`❤️`,protein:16,fat:9,carbs:0,fiber:0,calories:160},{name:`Сердце говяжье`,icon:`💗`,protein:17,fat:4,carbs:0,fiber:0,calories:120},{name:`Почки`,icon:`🧫`,protein:17,fat:3,carbs:0,fiber:0,calories:100}]}}})),_,v=e((()=>{_=class{get(e){let t=localStorage.getItem(e);if(t===null)return null;try{return JSON.parse(t)}catch{return null}}set(e,t){localStorage.setItem(e,JSON.stringify(t))}remove(e){localStorage.removeItem(e)}static help(){console.log(`
            тупой класс для работы с локальным хранилищем
            никаких мыслей сюда не вкладывать!!!
            get возвращает либо null либо готовый для работы массив
            set должен принять массив и записать его в локалсторадж в виде JSON строки
        `),console.log(`
            тупой класс для работы с локальным хранилищем
            никаких мыслей сюда не вкладывать!!!
            get возвращает либо null либо готовый для работы массив
            set должен принять массив и записать его в локалсторадж в виде JSON строки
        `)}static helpEN(){console.log(`
            A dumb class for working with local storage
            do not put any logic in here!!! 
            get returns either null or an array ready for use
            set must accept an array and write it to local storage as a JSON string
        `)}}})),y,b=e((()=>{g(),v(),y=class{#e=[];constructor(){this.products=new h,this.storageService=new _}get(e){let t=this.storageService.get(e);if(t===null)throw Error(`Данные "${e}" не инициализированы. Убедись, что DefaultLS.init() был вызван при старте.`);return t}addItem(e){let t=!1;if(typeof e.name!=`string`&&(t=!0),typeof e.protein!=`number`&&(t=!0),typeof e.fat!=`number`&&(t=!0),typeof e.carbs!=`number`&&(t=!0),typeof e.fiber!=`number`&&(t=!0),typeof e.calories!=`number`&&(t=!0),t)throw Error(`Ошибка в объекте продукта`);this.#e=this.storageService.get(`quickMenu`);let n=this.#e.pop(),r=this.#e.pop();this.#e.push(e),this.#e.push(r),this.#e.push(n),this.storageService.set(`quickMenu`,this.#e)}getProductsAll(e){return this.#e=this.storageService.get(e),this.#e}}})),x=e((()=>{})),S,C=e((()=>{x(),S=class{render(){return`
        <div class="category-dropdown">
            <button class="category-btn" data-category-btn>
                <span class="cat-icon">📂</span>
                <strong>Категории</strong>
                <button class="cat-close"></button>
            </button>
            
            <div class="category-menu" data-category-menu>
            
                <ul class="category-list">
                    <li class="category-item">
                        <label>
                            <input type="checkbox" value="meat">
                            <span class="category-name">Мясо</span>
                        </label>
                    </li>

                    <li class="category-item">
                        <label>
                            <input type="checkbox" value="fish">
                            <span class="category-name">Рыба</span>
                        </label>
                    </li>

                    <li class="category-item">
                        <label>
                            <input type="checkbox" value="seafood">
                            <span class="category-name">Морепродукты</span>
                        </label>
                    </li>

                    <li class="category-item">
                        <label>
                            <input type="checkbox" value="eggs">
                            <span class="category-name">Яйца</span>
                        </label>
                    </li>

                    <li class="category-item">
                        <label>
                            <input type="checkbox" value="dairy">
                            <span class="category-name">Молочка</span>
                        </label>
                    </li>

                    <li class="category-item">
                        <label>
                            <input type="checkbox" value="vegan">
                            <span class="category-name">Растительные белки</span>
                        </label>
                    </li>

                    <li class="category-item">
                        <label>
                            <input type="checkbox" value="vegan">
                            <span class="category-name">Вредное</span>
                        </label>
                    </li>
                </ul>
            <button class="category-btn">
                <span class="cat-icon">Показать</span>
            </button>
            </div>

        </div>


        `}}})),w,T=e((()=>{m(),b(),C(),w=class{constructor(){this.quickAdd=new p,this.quickMenuModel=new y,this.quickMenuItemsWievCategor=new S}init(){let e=this.quickMenuModel.get(`quickMenu`);this.quickAdd.render(e),this.quickAdd.injectQuickMenuItemsWievCategor(this.quickMenuItemsWievCategor.render()),this.quickAdd.bindEvents()}}})),E,D=e((()=>{g(),v(),E=class{constructor(){this.products=new h,this.storageService=new _}init(){if(this.storageService.get(`quickMenu`)===null){let e=this.products.startProducts();this.storageService.set(`quickMenu`,e)}}}}));t((()=>{o(),d(),T(),D(),new E().init(),new a().init(),new u().init(),new w().init()}))();