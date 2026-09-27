import { dairyProducts } from './products/dairyProducts.js';

export class Products {

constructor(storageService) {

    // принять ссылку на сервис работы с хранилищем
    this.storageService = storageService;

    // объект с данными
    this.products = {
      dairyProducts,
    }

}

startProducts() {
  return([
    {
        icon : '➕',
        name : 'Добавить',
        protein : '',
        fat : 0,
        carbs : 0,
        fiber : 0,
        calories : 0
    },
    {
        icon : '➖',
        name : 'Убрать',
        protein : '',
        fat : 0,
        carbs : 0,
        fiber : 0,
        calories : 0
    }
  ]);
}

init() {
    const searchDairyProducts = this.storageService.get('dairyProducts');
    // this.storageService.remove('dairyProducts');

    // проверить есть ли запись в локальном хранилище. Если ее нет, или она короче той, что в массиве
    // то обновить хранилище и присвоить значение в поле класса.
    if (searchDairyProducts === null
      || (searchDairyProducts.length < this.products.dairyProducts.length)
    ) {
      this.storageService.set('dairyProducts', this.products.dairyProducts);
      this.products.dairyProducts = this.dairyProducts;
    }

}


}
