// класс рендерит выпадающее меню с чикбоксами по входящему массиву

import './scss/QuickMenuItemsWievCategor.scss';

export class QuickMenuItemsWievCategor {

render() {
    return(`
        <div class="category-dropdown">
            <button class="category-btn" data-category-btn>
                <span class="cat-icon">📂</span>
                <strong>Категории</strong>
                <span class="cat-close"></span>
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


        `);
}
}