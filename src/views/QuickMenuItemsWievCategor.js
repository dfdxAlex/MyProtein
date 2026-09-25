// класс рендерит выпадающее меню с чикбоксами по входящему массиву

import './scss/QuickMenuItemsWievCategor.scss';

export class QuickMenuItemsWievCategor {

render(items) {
    const itemsLi = this.#createItems(items);
    return(`
        <div class="category-dropdown">
            <div class="category-menu" data-category-menu>
                <div class="category-btn" data-category-btn>
                    <span class="cat-icon">📂</span>
                    <strong>Категории</strong>
                    <button class="category-btn-close"></button>
                </div>
                <ul class="category-list">
                    ${itemsLi}
                </ul>
            <button class="category-btn">
                <span class="cat-icon">Показать</span>
            </button>
            </div>
        </div>
        `);
}

#createItems(items) {
        return items.map(({name, value}) => {
        return(`  
                    <li class="category-item">
                        <label class="category-label">
                            <input class="category-checkbox" type="checkbox" value="${value}">
                            <span class="category-name">${name}</span>
                        </label>
                    </li>
                    `);    
        }).join('');
    }

// bindEvents() {
//     // выбрать крестик и акинуть событие
//     const buttonClose = document.querySelector('.category-btn-close');

//             console.log('knok');

// }

}