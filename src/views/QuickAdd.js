import './scss/QuickAdd.scss';

export class QuickAdd {

foodItems = [];

constructor (meatProducts) {

    

    this.meatProducts = meatProducts;
    
    this.foodItems.push({
        icon : '🥚',
        name : 'Яйцо',
        protein : 12.5,
        fat : 10.5,
        carbs : 1,
        fiber : 0,
        calories : 155
    },
    {
        icon : '🍗',
        name : 'Курица',
        protein : 23,
        fat : 2,
        carbs : 0,
        fiber : 0,
        calories : 110
    },
    {
        icon : '🥛',
        name : 'Творог',
        protein : 18,
        fat : 5,
        carbs : 3,
        fiber : 0,
        calories : 145
    }
);

    
    console.log(JSON.parse(JSON.stringify(this.foodItems)));

}

// set Progress () {


// }


#buildingQuickAdd() {
    let rezultStr = this.foodItems.reduce((str = '', curr) => {
        return(str + `  <button class="quick-item">
                            <span class="food-icon">${curr.icon}</span>
                            <span>
                                <strong>${curr.name}</strong>
                                <small>+ ${curr.protein} г</small>
                            </span>
                        </button>
                    `);
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

render() {
    document.querySelector('#quick-add').innerHTML = this.#buildingQuickAdd();
}

}