import { dairyProducts } from './products/dairyProducts.js';
import { eggProducts } from './products/eggProducts.js';
import { fishProducts } from './products/fishProducts.js';
import { meatProducts } from './products/meatProducts.js';
import { nutsProducts } from './products/nutsProducts.js';
import { restProducts } from './products/restProducts.js';
import { plantProteinProducts } from './products/plantProteinProducts.js';
import { seafoodProducts } from './products/seafoodProducts.js';
import { veganProducts } from './products/veganProducts.js';

export class Products {

constructor({storageService}) {

    // принять ссылку на сервис работы с хранилищем
    this.storageService = storageService;

    // объект с данными
    this.products = {
      dairyProducts,
      eggProducts,
      fishProducts,
      meatProducts,
      nutsProducts,
      restProducts,
      plantProteinProducts,
      seafoodProducts,
      veganProducts
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
  // перебрать все поля в объекте и проверить актуальность к стартовым значениям.

  Object.entries(this.products).forEach(
      ([key, products]) => {
            let searchProduct = this.storageService.get(key);
            
            // проверить есть ли запись в локальном хранилище. Если ее нет, или она короче той, что в массиве
            // то обновить хранилище и присвоить значение в поле класса.
            if (searchProduct === null || (searchProduct.length < products.length)
              ) {
            this.storageService.set(key, products);
            }
        });
}

// метод получает объект с нужными полями и возвращает массив с продуктами
getProducts(obj) {

  const result = [];

  obj.forEach(
      (key) => {
          result.push(...this.products[key]);
        });

  return result;
}

}
