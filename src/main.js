import { ControllerMenuUp } from './controllers/ControllerMenuUp.js';
import { ControllerProgressCard } from './controllers/ControllerProgressCard.js';
import { ControllerQuickAdd } from './controllers/ControllerQuickAdd.js';
import { DefaultLS } from './models/DefaultLS.js';
import { DynamicEvents } from './controllers/DynamicEvents.js';


// import { StorageService } from './services/StorageService.js';
//  new StorageService().remove('quickMenu');
//  productsAll = [];

new DefaultLS().init();
const controllerMenuUp = new ControllerMenuUp();
controllerMenuUp.init();
const controllerProgressCard = new ControllerProgressCard();
controllerProgressCard.init();
const controllerQuickAdd = new ControllerQuickAdd();
controllerQuickAdd.init();


const dynamicEvents = new DynamicEvents(controllerMenuUp, controllerProgressCard, controllerQuickAdd).init();
// инъекции для передачи ссылок на объекты
// dynamicEvents.controllerMenuUp = controllerMenuUp;
// dynamicEvents.controllerProgressCard = controllerProgressCard;
// dynamicEvents.controllerQuickAdd = controllerQuickAdd;


//localStorage.getItem("quickMenu"); Содержит строку с массивом объектов для кнопок быстрого меню