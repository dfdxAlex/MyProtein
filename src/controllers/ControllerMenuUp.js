
export class ControllerMenuUp {

    constructor ({homeView}) {
        this.homeWiev = homeView;
    }

    init() {
        this.homeWiev.render();
    }

}