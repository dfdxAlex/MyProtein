
export class ControllerQuickAdd {

    constructor ({quickAdd, quickMenuModel}) {
        this.quickAdd = quickAdd;
        this.quickMenuModel = quickMenuModel;
        this.itemsLi = this.quickMenuModel.getItemsLi();
    }

    init() {
        let items = this.quickMenuModel.get('quickMenu');
        this.quickAdd.render(items);
    }
}