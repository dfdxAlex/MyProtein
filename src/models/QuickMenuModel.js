import { Products } from "./Products";
import { StorageService } from '../services/StorageService.js';

export class QuickMenuModel {

    #productsAll = [];

    constructor() {
        this.products = new Products();
        this.storageService = new StorageService();
    }

    get(key) {
        let data = this.storageService.get(key);

        if (data === null) {
            this.#serviceLocalCtorage(key);  
            data = this.storageService.get(key);  
        }

        try {
            return JSON.parse(data);
        } catch (e) {
            this.#serviceLocalCtorage(key);
            return JSON.parse(this.storageService.get(key));
        }
    }

    #serviceLocalCtorage(key)
    {
        const def = this.products.startProducts();
        this.storageService.set(key, JSON.stringify(def));
    }
    // set(key, value) {
    //     localStorage.setItem(key, JSON.stringify(value));
    // }

    // remove(key) {
    //     localStorage.removeItem(key);
    // }

    addItem(item) {
        let error = false;
        if (typeof item.name !== 'string') error=true;
        if (typeof item.protein !== 'number') error=true;
        if (typeof item.fat !== 'number') error=true;
        if (typeof item.carbs !== 'number') error=true;
        if (typeof item.fiber !== 'number') error=true;
        if (typeof item.calories !== 'number') error=true;
        if (error) throw new Error('Ошибка в объекте продукта');

        this.#productsAll = this.storageService.get('quickMenu');
        
//  this.remove('quickMenu');
//  productsAll = [];

        const itemEnd = this.#productsAll.pop();
        const itemEnd2 = this.#productsAll.pop();
        
        this.#productsAll.push(item);
        this.#productsAll.push(itemEnd2);
        this.#productsAll.push(itemEnd);
        this.storageService.set('quickMenu',this.#productsAll);
    }

    is_LS(key) {
        let data = localStorage.getItem(key);

        if (data === null) {
            return false;
        }
        return true;
    }

    getProductsAll(key) {
        this.#productsAll = this.storageService.get(key);
        return this.#productsAll;
    }

}
