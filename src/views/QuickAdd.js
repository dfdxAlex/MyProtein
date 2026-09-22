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
        return(str + `  <button class="quick-item">
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

}