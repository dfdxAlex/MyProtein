import { QuickAdd } from "../views/QuickAdd";
import { QuickMenuModel } from "../models/QuickMenuModel.js";
import { QuickMenuItemsWievCategor } from "../views/QuickMenuItemsWievCategor.js";


export class ControllerQuickAdd {

    constructor () {
        this.quickAdd = new QuickAdd();
        this.quickMenuModel = new QuickMenuModel();
        this.quickMenuItemsWievCategor = new QuickMenuItemsWievCategor();
        this.itemsLi = this.quickMenuModel.getItemsLi();
    }

    init() {
        let items = this.quickMenuModel.get('quickMenu');
        this.quickAdd.render(items);

        // рендер меню категорий
        // this.quickAdd.injectQuickMenuItemsWievCategor(this.quickMenuItemsWievCategor.render(this.itemsLi))
        // события на меню категорий
        // this.quickAdd.bindEvents(); тут
    }
}