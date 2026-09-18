import { ProgressCard } from "../views/ProgressCard";

export class ControllerProgressCard {

    constructor () {
        const progressCard = new ProgressCard();
        progressCard.Progress = [55, 150,'г','Цель на сегодня', 'Ещё'];
        progressCard.render();

        // тестовый подсчёт круглой статистики, удалить после окончания теста
        // меняет стиль после рендеринга - круговая статистика
        document.querySelector('.progress-card--circle')
                .style.setProperty('--progress-circle', progressCard.ProgressDeg);
        document.querySelector('.progress-value')
                .style.setProperty('--progress-bar', progressCard.ProgressValue);
    }

}