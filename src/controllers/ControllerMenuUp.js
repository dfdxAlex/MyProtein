import { HomeView } from "../views/HomeView";

export class ControllerMenuUp {

    constructor () {
        this.homeWiev = new HomeView();
    }

    init() {
        this.homeWiev.render();
    }

}