import { QuickAdd } from "../views/QuickAdd";
import { meatProducts } from '../models/meatProducts';


export class ControllerQuickAdd {

    constructor () {
        new QuickAdd(meatProducts).render();
    }

}