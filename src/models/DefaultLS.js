import { Products } from "./Products";
import { StorageService } from './StorageService.js';


export class DefaultLS {
    constructor() {
        this.products = new Products();
        this.storageService = new StorageService();
    }

    init() {
        if (this.storageService.get('quickMenu') === null) {
            const item = this.products.startProducts();
            this.storageService.set('quickMenu',JSON.stringify(item));
        }
    }
}