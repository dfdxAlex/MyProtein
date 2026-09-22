import { QuickAdd } from "../views/QuickAdd";
import { Products } from '../models/Products.js';
import { StorageService } from '../models/StorageService.js';


export class ControllerQuickAdd {

    constructor () {
        this.products = new Products();
        this.quickAdd = new QuickAdd();
        this.locStor = new StorageService();
    }

    init() {
        const items = this.products.startProducts();
        this.locStor.get('quickMenu');
        this.quickAdd.render(items);
    }

}