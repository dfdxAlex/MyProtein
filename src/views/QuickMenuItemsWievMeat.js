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

#items(items) {
    
}

/*
<div class="quick-dropdown">


    <div class="dropdown-menu" data-dropdown-menu>
        <ul class="dropdown-list">
            <li class="dropdown-item">
                <label>
                    <input type="checkbox" value="egg">
                    <span class="item-icon">🥚</span>
                    <span class="item-name">Яйцо</span>
                </label>
            </li>

            <li class="dropdown-item">
                <label>
                    <input type="checkbox" value="chicken">
                    <span class="item-icon">🍗</span>
                    <span class="item-name">Курица</span>
                </label>
            </li>

            <li class="dropdown-item">
                <label>
                    <input type="checkbox" value="cottage">
                    <span class="item-icon">🥛</span>
                    <span class="item-name">Творог</span>
                </label>
            </li>
        </ul>
    </div>
</div>

*/

}

