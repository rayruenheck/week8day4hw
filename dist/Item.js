export default class Item {
    constructor(_id, _name, _price, _desc) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
    }
    get desc() {
        return this._desc;
    }
    set desc(value) {
        this._desc = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
//# sourceMappingURL=Item.js.map