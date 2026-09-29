// класс управляет событиями для прохождения этапа добавления пунктов в быстрое меню

export class AppController {

    constructor ({app,
                  controllerMenuUp, 
                  controllerProgressCard, 
                  controllerQuickAdd, 
                  products,
                  quickMenuModel,
                  quickMenuItemsWievCategor}) {

        this.app = app;

        this.quickMenuItemsWievCategor = quickMenuItemsWievCategor;
        this.controllerMenuUp = controllerMenuUp;
        this.controllerProgressCard = controllerProgressCard;
        this.controllerQuickAdd = controllerQuickAdd;
        this.products = products;
        this.quickMenuModel = quickMenuModel;

        // массив со всеми полями для очистки, если нужно очистить не все, то добавить отдельный 
        // массив в clearLayout
        this.Layouts = ['menu-up', 'progress-card', 'quick-add', 'food-today', 'add-button', 'bottom-nav'];
    }

    init() {
        
        this.app.addEventListener('click', (e)=>{

            // если нажата кнопка крестика меню категорий
            if (e.target.closest('.category-btn-close')) {
                this.clearLayout(this.Layouts);

                this.controllerMenuUp.init();
                this.controllerProgressCard.init();
                this.controllerQuickAdd.init();
                return;
            }

            // если нажата кнопка + или -
            if (e.target.closest('.add-or-del-product')) {
                this.clearLayout(this.Layouts);
                document.getElementById('quick-add').innerHTML = 
                    this.quickMenuItemsWievCategor.render(this.quickMenuModel.getItemsLi());
            }

            // если нажата кнопка показать продукты в выборе категорий
            if (e.target.closest('.button-seed-category')) {

                // список выбранных категорий в массив получить
                const listCat = this.quickMenuItemsWievCategor.selectedCategory();
                // очистить поля
                this.clearLayout(this.Layouts);

                // есть массив с продуктами, остается сделать вьюху на вывод
                console.log(this.products.getProducts(listCat));
            }
            
        });
    }

clearLayout(idArray) {
    idArray.forEach(id => {
    document.getElementById(id).innerHTML = '';
    });
}



}