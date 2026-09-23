import './scss/QuickAdd.scss';

export class QuickAdd {

#buildingQuickAdd(foodItems) {
    let rezultStr = foodItems.reduce((str = '', curr) => {
        if (curr.icon !== '➕' && curr.icon !== '➖')
        return(str + `  <button class="quick-item">
                            <span class="food-icon">${curr.icon}</span>
                            <span>
                                <strong>${curr.name}</strong>
                                <small>+ ${curr.protein} г</small>
                            </span>
                        </button>
                    `);
        else {
        return(str + `  <button class="quick-item" data-category-btn>
                            <span class="food-icon">${curr.icon}</span>
                            <span>
                                <strong>${curr.name}</strong>
                            </span>
                        </button>
                    `);    
        }
    },'');
    return `
        <section class="quick-section">
            <div class="section-title">
                <h2>Быстро добавить</h2>
            </div>

            <div class="quick-list">
                ${rezultStr}
            </div>
        </section>
    `;
}

render(foodItems) {
    document.querySelector('#quick-add').innerHTML = this.#buildingQuickAdd(foodItems);
}

bindEvents() {

    // выбрать две кнопки + -
    const buttons = document.querySelectorAll('[data-category-btn]');
    console.log(buttons[0].innerText);
    console.log(buttons[1].innerText);

    //
    buttons[0].addEventListener('click', ()=>{
        //запомнить текущее содержимое 
        // let bodyHome = document.body.innerHTML;
        document.body.innerHTML = this.quickMenuItemsWievCategor;

        // let menuCategory = document.querySelector('[data-category-btn]');
        // menuCategory.addEventListener('click', );
        // console.log(menuCategory);
    });

document.addEventListener('click', (e) => {
//     const btn = e.target.closest('[data-category-btn]');
//     const menu = document.querySelector('[data-category-menu]');

//     if (btn) {
//         menu.classList.toggle('active');
//         return;
//     }

//     if (!e.target.closest('.category-dropdown')) {
//         menu.classList.remove('active');
//     }
 });

// document.addEventListener('click', (e) => {
//     const btn = e.target.closest('[data-category-btn]');
//     const menu = document.querySelector('[data-category-menu]');

//     if (btn) {
//         menu.classList.toggle('active');
//         return;
//     }

//     if (!e.target.closest('.category-dropdown')) {
//         menu.classList.remove('active');
//     }
// });

    // buttons.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         // console.log('клик по кнопке', btn);
    //         const buttonPlusAndMinus = document.querySelector("body");
    //         // console.log('клик по кнопке', buttonPlusAndMinus);
    //         // console.log(buttonPlusAndMinus);
    //         // console.log(this.quickMenuItemsWievCategor);
    //         buttonPlusAndMinus.innerHTML = this.quickMenuItemsWievCategor;
    //     });
    // });

    // document.addEventListener('click', (e) => {
    // const btn = e.target.closest('[data-category-btn]');
    // const menu = document.querySelector('[data-category-menu]');

    // if (btn) {
    //     menu.classList.toggle('active');
    //     return;
    // }

    // if (!e.target.closest('.category-dropdown')) {
    //     menu.classList.remove('active');
    // }
// });

}

injectQuickMenuItemsWievCategor(quickMenuItemsWievCategor)
{
    this.quickMenuItemsWievCategor = quickMenuItemsWievCategor;
}

}