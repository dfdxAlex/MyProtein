import {HomeView} from './view/HomeView.js';
import {ProgressCard} from './view/ProgressCard.js';

const view = new HomeView();
// view.Header = ['Завтра', 'Помидор'];

const progressCard = new ProgressCard();
// progressCard.Progress = [80, 100,'г','Цель на сегодня', 'Ещё']

const renderHtml = view.render() + progressCard.render();
document.querySelector('#app').innerHTML = renderHtml;