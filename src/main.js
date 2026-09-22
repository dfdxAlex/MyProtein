import { ControllerMenuUp } from './controllers/ControllerMenuUp.js';
import { ControllerProgressCard } from './controllers/ControllerProgressCard.js';
import { ControllerQuickAdd } from './controllers/ControllerQuickAdd.js';


new ControllerMenuUp().init();
new ControllerProgressCard().init();
new ControllerQuickAdd().init();


//localStorage.getItem("quickMenu"); Содержит строку с массивом объектов для кнопок быстрого меню