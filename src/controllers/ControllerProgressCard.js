import { ProgressCard } from "../views/ProgressCard";

export class ControllerProgressCard {

    constructor () {
        this.progressCard = new ProgressCard();

    }

    init() {
        this.progressCard.Progress = [55, 150,'г','Цель на сегодня', 'Ещё'];
        this.progressCard.render();

        // тестовый подсчёт круглой статистики, удалить после окончания теста
        // меняет стиль после рендеринга - круговая статистика
        document.querySelector('.progress-card--circle')
                .style.setProperty('--progress-circle', this.progressCard.ProgressDeg);
        document.querySelector('.progress-value')
                .style.setProperty('--progress-bar', this.progressCard.ProgressValue);
    }

}