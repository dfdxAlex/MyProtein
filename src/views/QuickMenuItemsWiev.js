// класс рендерит выпадающее меню с чикбоксами по входящему массиву

import './scss/QuickMenuItemsWiev.scss';

export class QuickMenuItemsWiev {

#quickMenuItemsWiev(items, PlusOrMinus) {
    return(`
            <div class="quick-dropdown">
                <button class="quick-btn" data-dropdown-btn>
                    <span class="food-icon">${PlusOrMinus}</span>
                    <strong>Добавить</strong>
                </button>
            </div>

        `);
}

}

