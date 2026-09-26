import './scss/QuickAdd.scss';

export class QuickAdd {

#buildingQuickAdd(foodItems) {
    let rezultStr = foodItems.reduce((str, curr) => {
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
        return(str + `  <button class="quick-item add-or-del-product" data-category-btn>
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

// вставить событие нажатия на одну из кнопок + или -
// bindEvents() {

//     // выбрать две кнопки + -
//     const buttons = document.querySelectorAll('[data-category-btn]');

//     //рендернуть в каждую из кнопок меню выбора категорий
//     buttons.forEach((bot)=>{
//         bot.addEventListener('click', ()=>{
//             // вставить кнопки выбора категории
//             // this.quickMenuItemsWievCategor - инъекция из ControllerQuickAdd
//             // document.getElementById('menu-up').innerHTML = this.quickMenuItemsWievCategor;
//             document.getElementById('quick-add').innerHTML = this.quickMenuItemsWievCategor;
//             console.log('рендер в quick-add');
//         });
//     });
// }

// injectQuickMenuItemsWievCategor(quickMenuItemsWievCategor)
// {
//     this.quickMenuItemsWievCategor = quickMenuItemsWievCategor;
// }

}