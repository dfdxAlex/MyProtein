import { QuickAdd } from "../views/QuickAdd";
import { Products } from '../models/Products.js';
import { StorageService } from '../models/StorageService.js';


export class ControllerQuickAdd {

    constructor () {
        const menuQuickAdd = new QuickAdd().render(new Products().startProducts());
    }

}