export default class Shop {
    constructor(_item1, _item2, _item3) {
        this._item1 = _item1;
        this._item2 = _item2;
        this._item3 = _item3;
        this._items = [];
        this._items.push(this._item1);
        this._items.push(this._item2);
        this._items.push(this._item3);
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    get item3() {
        return this._item3;
    }
    set item3(value) {
        this._item3 = value;
    }
    get item2() {
        return this._item2;
    }
    set item2(value) {
        this._item2 = value;
    }
    get item1() {
        return this._item1;
    }
    set item1(value) {
        this._item1 = value;
    }
}
//# sourceMappingURL=Shop.js.map