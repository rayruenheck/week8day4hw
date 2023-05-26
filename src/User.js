"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var User = /** @class */ (function () {
    function User(_userid, _name, _age, _cart) {
        if (_userid === void 0) { _userid = (0, uuid_1.v4)(); }
        this._userid = _userid;
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
    }
    Object.defineProperty(User.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        set: function (value) {
            this._cart = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userid", {
        get: function () {
            return this._userid;
        },
        set: function (value) {
            this._userid = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.addToCart = function (user, item) {
        user.cart.push(item);
    };
    User.prototype.removeFromCart = function (item, user) {
        var i = user.cart.length;
        while (i--) {
            if (user.cart[i] === item) {
                user.cart.splice(i, 1);
            }
        }
    };
    User.prototype.removeQuantityFromCart = function (item, user, num) {
        var n = user.cart.indexOf(item);
        user.cart.splice(n, num);
    };
    User.prototype.cartTotal = function (user) {
        console.log("total price in ".concat(user.name, "'s cart is: ").concat(user.cart.reduce(function (acc, item) { return acc + item.price; }, 0), "$"));
        return user.cart.reduce(function (acc, item) { return acc + item.price; }, 0);
    };
    User.prototype.printCart = function (user) {
        console.log(user.cart);
    };
    return User;
}());
exports.default = User;
