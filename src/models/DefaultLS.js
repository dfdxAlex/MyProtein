
export class DefaultLS {
    constructor({storageService, 
                 products}) {
        this.products = products;
        this.storageService = storageService;
    }

    init() {
        if (this.storageService.get('quickMenu') === null) {
            const item = this.products.startProducts();
            this.storageService.set('quickMenu',item);
        }
    }
}