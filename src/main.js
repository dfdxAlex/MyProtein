import { ProgressCard } from './views/ProgressCard.js';
import { QuickAdd } from './views/QuickAdd.js';
import { meatProducts } from './models/meatProducts.js';
import { ControllerMenuUp } from './controllers/ControllerMenuUp.js';


new ControllerMenuUp();

const progressCard = new ProgressCard();
progressCard.Progress = [55, 150,'г','Цель на сегодня', 'Ещё'];

const renderHtml = progressCard.render() + new QuickAdd(meatProducts).render();
document.querySelector('#app').innerHTML = renderHtml;



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


// тестовый подсчёт круглой статистики, удалить после окончания теста
// меняет стиль после рендеринга - круговая статистика
document.querySelector('.progress-card--circle')
        .style.setProperty('--progress-circle', progressCard.ProgressDeg);
document.querySelector('.progress-value')
        .style.setProperty('--progress-bar', progressCard.ProgressValue);

