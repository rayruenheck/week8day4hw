"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shop = /** @class */ (function () {
    function Shop(_item1, _item2, _item3) {
        this._item1 = _item1;
        this._item2 = _item2;
        this._item3 = _item3;
        this._items = [];
        this._items.push(this._item1);
        this._items.push(this._item2);
        this._items.push(this._item3);
    }
    Object.defineProperty(Shop.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "item3", {
        get: function () {
            return this._item3;
        },
        set: function (value) {
            this._item3 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "item2", {
        get: function () {
            return this._item2;
        },
        set: function (value) {
            this._item2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shop.prototype, "item1", {
        get: function () {
            return this._item1;
        },
        set: function (value) {
            this._item1 = value;
        },
        enumerable: false,
        configurable: true
    });
    return Shop;
}());
exports.default = Shop;
