import { ControllerMenuUp } from './controllers/ControllerMenuUp.js';
import { ControllerProgressCard } from './controllers/ControllerProgressCard.js';
import { ControllerQuickAdd } from './controllers/ControllerQuickAdd.js';
import { DefaultLS } from './models/DefaultLS.js';


// import { StorageService } from './services/StorageService.js';
//  new StorageService().remove('quickMenu');
//  productsAll = [];

new DefaultLS().init();
new ControllerMenuUp().init();
new ControllerProgressCard().init();
const bbb = new ControllerQuickAdd();
bbb.init();

// bbb.getArray();

// bbb.addItem({
//         icon : '🍗',
//         name : 'Курица',
//         protein : 23,
//         fat : 2,
//         carbs : 0,
//         fiber : 0,
//         calories : 110
//     });


//localStorage.getItem("quickMenu"); Содержит строку с массивом объектов для кнопок быстрого меню