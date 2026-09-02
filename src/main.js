import {HomeView} from './view/HomeView.js';
import {ProgressCard} from './view/ProgressCard.js';

const view = new HomeView();
// view.Header = ['Завтра', 'Помидор'];

const progressCard = new ProgressCard();
progressCard.Progress = [15, 150,'г','Цель на сегодня', 'Ещё'];
// ProgressCard.help();


const renderHtml = view.render() + progressCard.render();
document.querySelector('#app').innerHTML = renderHtml;

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


// тестовый подсчёт круглой статистики, удалить после окончания теста
// меняет стиль после рендеринга - круговая статистика
document.querySelector('.progress-circle')
        .style.setProperty('--progress-circle', progressCard.ProgressDeg);
document.querySelector('.progress-value')
        .style.setProperty('--progress-bar', progressCard.ProgressValue);

