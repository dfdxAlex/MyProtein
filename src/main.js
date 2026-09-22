import { ControllerMenuUp } from './controllers/ControllerMenuUp.js';
import { ControllerProgressCard } from './controllers/ControllerProgressCard.js';
import { ControllerQuickAdd } from './controllers/ControllerQuickAdd.js';
import { StorageService } from './models/StorageService.js';


new ControllerMenuUp();
new ControllerProgressCard();
new ControllerQuickAdd();


//localStorage.getItem("quickMenu"); Содержит строку с массивом объектов для кнопок быстрого меню