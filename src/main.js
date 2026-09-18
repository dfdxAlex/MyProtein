import { ControllerMenuUp } from './controllers/ControllerMenuUp.js';
import { ControllerProgressCard } from './controllers/ControllerProgressCard.js';

import { QuickAdd } from './views/QuickAdd.js';
import { meatProducts } from './models/meatProducts.js';


new ControllerMenuUp();
new ControllerProgressCard();


const renderHtml = new QuickAdd(meatProducts).render();
document.querySelector('#app').innerHTML = renderHtml;

