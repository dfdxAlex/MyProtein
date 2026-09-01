
import './scss/HomeView.scss';

export class HomeView {

constructor () {
this.Header = `
    <header class="header">
        <div>
            <div class="greeting">Сегодня</div>
            <h1>Белок</h1>
        </div>

        <button class="icon-button">⚙</button>
    </header>`;
}

render() {
    return this.Header;
}

}


// export default class SetInput {
//     constructor(id, text) {
//         this.id = id;
//         this.text = text;
//     }

//     render() {
//         return `
//             <div>
//                 <input
//                     type="text"
//                     id="${this.id}"
//                     name="index"
//                     placeholder="${this.text}"
//                 >
//             </div>
//         `;
//     }
// }