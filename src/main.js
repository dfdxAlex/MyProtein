import { ControllerMenuUp } from './controllers/ControllerMenuUp.js';
import { ControllerProgressCard } from './controllers/ControllerProgressCard.js';
import { ControllerQuickAdd } from './controllers/ControllerQuickAdd.js';
import { AppController } from './controllers/AppController.js';

import { DefaultLS } from './models/DefaultLS.js';
import { Products } from './models/Products.js';
import { QuickMenuModel } from './models/QuickMenuModel.js';

import { QuickMenuItemsWievCategor } from './views/QuickMenuItemsWievCategor.js';
import { QuickAdd } from './views/QuickAdd.js';
import { HomeView } from './views/HomeView.js';
import { ProgressCard } from "./views/ProgressCard";

import { StorageService } from './services/StorageService.js';

const storageService = new StorageService();

const products = new Products({storageService});
products.init();
const defaultLS = new DefaultLS({storageService, 
                                 products});
defaultLS.init();

const quickMenuModel = new QuickMenuModel({storageService, products});
const quickAdd = new QuickAdd();

const quickMenuItemsWievCategor = new QuickMenuItemsWievCategor();

const homeView = new HomeView();
const controllerMenuUp = new ControllerMenuUp({homeView});
controllerMenuUp.init();

const progressCard = new ProgressCard();
const controllerProgressCard = new ControllerProgressCard({progressCard});
controllerProgressCard.init();

const controllerQuickAdd = new ControllerQuickAdd({quickAdd, quickMenuModel});
controllerQuickAdd.init();



const appController = new AppController({app:document.getElementById("app"),
                                         controllerMenuUp, 
                                         controllerProgressCard, 
                                         controllerQuickAdd,
                                         products,
                                         quickMenuModel,
                                         quickMenuItemsWievCategor
                                        });
appController.init();
// инъекции для передачи ссылок на объекты
// dynamicEvents.controllerMenuUp = controllerMenuUp;
// dynamicEvents.controllerProgressCard = controllerProgressCard;
// dynamicEvents.controllerQuickAdd = controllerQuickAdd;


//localStorage.getItem("quickMenu"); Содержит строку с массивом объектов для кнопок быстрого меню