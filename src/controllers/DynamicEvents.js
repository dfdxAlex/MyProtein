import { QuickMenuItemsWievCategor } from '../views/QuickMenuItemsWievCategor.js';

export class DynamicEvents {

    constructor (controllerMenuUp, controllerProgressCard, controllerQuickAdd) {
        this.app = document.getElementById("app");
        this.quickMenuItemsWievCategor = new QuickMenuItemsWievCategor();

        this.controllerMenuUp = controllerMenuUp;
        this.controllerProgressCard = controllerProgressCard;
        this.controllerQuickAdd = controllerQuickAdd;
    }

    init() {
        
        this.app.addEventListener('click', (e)=>{

            console.log(e.target);
            // если нажата кнопка крестика меню категорий
            if (e.target.closest('.category-btn-close')) {
                // this.quickMenuItemsWievCategor.bindEvents();
                document.getElementById('progress-card').innerHTML = "";
                document.getElementById('quick-add').innerHTML = "";
                document.getElementById('food-today').innerHTML = "";
                document.getElementById('add-button').innerHTML = "";
                document.getElementById('bottom-nav').innerHTML = "";

                this.controllerMenuUp.init();
                this.controllerProgressCard.init();
                this.controllerQuickAdd.init();
            }

            // если нажата кнопка + или -
            if (e.target.closest('.add-or-del-product')) {
                // this.quickMenuItemsWievCategor.bindEvents();
                document.getElementById('progress-card').innerHTML = "";
                document.getElementById('quick-add').innerHTML = "";
                document.getElementById('food-today').innerHTML = "";
                document.getElementById('add-button').innerHTML = "";
                document.getElementById('bottom-nav').innerHTML = "";
            }
            
        });
    }
}