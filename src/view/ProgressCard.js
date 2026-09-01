
import './scss/ProgressCard.scss';

export class ProgressCard {

constructor () {
    this.Progress = [90, 120, 'г', 'Цель на сегодня', 'Осталось'];
}

set Progress ([availability, norm, gramm, goal, left]) {
this._Progress = `
    <section class="progress-card">

        <div class="progress-circle">
            <div class="circle-inner">
                <strong>${availability}</strong>
                <span>из ${norm+' '+gramm}</span>
            </div>
        </div>

        <div class="progress-info">
            <span class="label">${goal}</span>

            <div class="big-number">
                ${norm} <small>${gramm}</small>
            </div>

            <div class="remaining">
                ${left} <strong>${(norm-availability)+' '+gramm} </strong>
            </div>

            <div class="progress-bar">
                <div class="progress-value"></div>
            </div>

            <span class="percent">${(availability*100)/norm}%</span>
        </div>

    </section>`;
}

render() {
    return this._Progress;
}

}