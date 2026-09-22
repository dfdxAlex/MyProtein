import { QuickAdd } from "../views/QuickAdd";
import { Products } from '../models/Products.js';
// import { StorageService } from '../models/StorageService.js';


export class ControllerQuickAdd {

    constructor () {
        this.products = new Products();
        this.quickAdd = new QuickAdd();
    }

    init() {
        const items = this.products.startProducts();
        this.quickAdd.render(items);
    }

}