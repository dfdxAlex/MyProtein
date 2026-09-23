import { QuickAdd } from "../views/QuickAdd";
// import { Products } from '../models/Products.js';
// import { StorageService } from '../services/StorageService.js';
import { QuickMenuModel } from "../models/QuickMenuModel.js";


export class ControllerQuickAdd {

    constructor () {
        // this.products = new Products();
        this.quickAdd = new QuickAdd();
        // this.locStor = new StorageService();
        this.quickMenuModel = new QuickMenuModel();
    }

    init() {
        
        let items = this.quickMenuModel.get('quickMenu');

        // if (!this.locStor.is_LS('quickMenu')) {
        //     console.log('взяли со старта');
        //     items = this.products.startProducts();
        // } else {
        //     items = this.locStor.getProductsAll('quickMenu');
        //     console.log('взяли текущий',items);
        // }

        this.quickAdd.render(items);
        
    }

    // getArray() {
    //     this.bottonArray = this.quickMenuModel.get('quickMenu');
    // }

    

}