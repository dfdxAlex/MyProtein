import { QuickAdd } from "../views/QuickAdd";
// import { StorageService } from '../services/StorageService.js';
import { QuickMenuModel } from "../models/QuickMenuModel.js";
import { QuickMenuItemsWievCategor } from "../views/QuickMenuItemsWievCategor.js";


export class ControllerQuickAdd {

    constructor () {
        this.quickAdd = new QuickAdd();
        this.quickMenuModel = new QuickMenuModel();
        this.quickMenuItemsWievCategor = new QuickMenuItemsWievCategor();
        // new StorageService().remove('quickMenu');
    }

    init() {
        let items = this.quickMenuModel.get('quickMenu');
        this.quickAdd.render(items);

        this.quickAdd.injectQuickMenuItemsWievCategor(this.quickMenuItemsWievCategor.render())
        this.quickAdd.bindEvents();
    }

    // getArray() {
    //     this.bottonArray = this.quickMenuModel.get('quickMenu');
    // }

    

}