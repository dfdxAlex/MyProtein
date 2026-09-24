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
new ControllerQuickAdd().init();



//localStorage.getItem("quickMenu"); Содержит строку с массивом объектов для кнопок быстрого меню