import { Products } from "./Products";
import { StorageService } from '../services/StorageService.js';

export class QuickMenuModel {

    #productsAll = [];
    #itemsLi = [];

    constructor() {
        this.products = new Products();
        this.storageService = new StorageService();

        this.#itemsLi = [
            {name:'Мясо',value:'meat'},
            {name:'Рыба',value:'fish'},
            {name:'Морепродукты',value:'seafood'},
            {name:'Яйца',value:'eggs'},
            {name:'Молочка',value:'dairy'},
            {name:'Растительные белки',value:'vegan'},
            {name:'Остальное',value:'rest'}
        ];
    }

    getItemsLi() {
        return this.#itemsLi;
    }

    get(key) {
        const data = this.storageService.get(key);

        if (data === null) {
            throw new Error(`Данные "${key}" не инициализированы. Убедись, что DefaultLS.init() был вызван при старте.`);
        } 

        return data;

    }

    #serviceLocalCtorage(key)
    {
        const def = this.products.startProducts();
        this.storageService.set(key, JSON.stringify(def));
    }

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
        
        const itemEnd = this.#productsAll.pop();
        const itemEnd2 = this.#productsAll.pop();
        
        this.#productsAll.push(item);
        this.#productsAll.push(itemEnd2);
        this.#productsAll.push(itemEnd);
        this.storageService.set('quickMenu',this.#productsAll);
    }

    getProductsAll(key) {
        this.#productsAll = this.storageService.get(key);
        return this.#productsAll;
    }

}
