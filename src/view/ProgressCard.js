
import './scss/ProgressCard.scss';

export class ProgressCard {

constructor () {
    this.Progress = [90, 120, 'г', 'Цель на сегодня', 'Осталось'];
}

set Progress ([availability, norm, gramm, goal, left]) {

if (typeof norm === 'number' && norm>0)
    this.norm = norm;
else 
    throw new Error('Неверное значение norm');


if (typeof availability === 'number' && availability>0 && availability<=this.norm)
    this.availability = availability;
else 
    throw new Error('Неверное значение availability');

if (typeof gramm === 'string')
    this.gramm = gramm;
else 
    throw new Error('Неверное значение gramm');

if (typeof goal === 'string')
    this.goal = goal;
else 
    throw new Error('Неверное значение goal');

if (typeof left === 'string')
    this.left = left;
else 
    throw new Error('Неверное значение left');

this.progressValue = Math.round(this.availability*100/this.norm);

this.#progress();
}

#progress() {
    this._Progress = this.#buildingProgress();
}

#buildingProgress() {
    return `
    <section class="progress-card">

                <div class="progress-circle">
                    <div class="circle-inner">
                        <strong>${this.availability}</strong>
                        <span>из ${this.norm+' '+this.gramm}</span>
                    </div>
                </div>

                <div class="progress-info">
                    <span class="label">${this.goal}</span>

                    <div class="big-number">
                        ${this.norm} <small>${this.gramm}</small>
                    </div>

                    <div class="remaining">
                        ${this.left} <strong>${(this.norm-this.availability)+' '+this.gramm} </strong>
                    </div>

                    <div class="progress-bar">
                        <div class="progress-value"></div>
                    </div>

                    <span class="percent">${this.progressValue}%</span>
                </div>

            </section>
    `;
}

get ProgressDeg() {
    return this.availability*360/this.norm + 'deg';
}

get ProgressValue() {
    return this.progressValue+'%';
}

render() {
    return this._Progress;
}


///////////////////////////////////////////////// документация //////////////////////////////////////////
static help() {
    console.log(`
            // Сетер Progress:
            // параметр 1: Сколько белка съедено
            // параметр 2: Сколько белка нужно съесть
            // параметр 3: Символ для обозначения граммов
            // параметр 4: Символ для строки 'Цель на сегодня'
            // параметр 5: Символ для строки 'Осталось'
            // Параметры 3,4,5 для переводов на другие языки или для непредвиденных целей

            // Геттер ProgressDeg возвращает число градусов на круговой диаграмме

            // Геттер ProgressValue возвращает число процентов на горизонтальном баре
        `);
}

static helpEN() {
    console.log(`
            // Progress setter:
            // Parameter 1: Amount of protein consumed
            // Parameter 2: Amount of protein to consume
            // Parameter 3: Symbol for grams
            // Parameter 4: Symbol for the string 'Today's goal'
            // Parameter 5: Symbol for the string 'Remaining'
            // Parameters 3, 4, and 5 are for translations into other languages ​​or for unexpected purposes

            // The ProgressDeg getter returns the number of degrees on a pie chart

            // The ProgressValue getter returns the number of percents on a horizontal bar
        `);
}

}