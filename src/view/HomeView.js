
import './scss/HomeView.scss';

export class HomeView {

constructor () {
    this.Header = ['Сегодня', 'Белок'];
}

set Header([setToday, setProtein]) {
    this._Header = `
    <header class="header">
        <div>
            <div class="greeting">${setToday}</div>
            <h1>${setProtein}</h1>
        </div>

        <button class="icon-button">⚙</button>
    </header>`;
}



render() {
    return this._Header;
}

}