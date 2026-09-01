import {HomeView} from './view/HomeView.js';

const view = new HomeView();
document.querySelector('#app').innerHTML = view.render();