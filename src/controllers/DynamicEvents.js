// import { QuickMenuItemsWievCategor } from '../views/QuickMenuItemsWievCategor.js';

export class DynamicEvents {

    constructor (controllerMenuUp, controllerProgressCard, controllerQuickAdd) {
        this.app = document.getElementById("app");
        // this.quickMenuItemsWievCategor = new QuickMenuItemsWievCategor();

        this.controllerMenuUp = controllerMenuUp;
        this.controllerProgressCard = controllerProgressCard;
        this.controllerQuickAdd = controllerQuickAdd;

        // массив со всеми полями для очистки, если нужно очистить не все, то добавить отдельный 
        // массив в clearLayout
        this.Layouts = ['progress-card', 'quick-add', 'food-today', 'add-button', 'bottom-nav'];

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
            }
            
        });
    }

clearLayout(idArray) {
    idArray.forEach(id => {
    document.getElementById(id).innerHTML = '';
    });
}

}