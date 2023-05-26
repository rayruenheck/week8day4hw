import { v4 as uuidv4 } from "uuid";
export default class User {
    constructor(_userid = uuidv4(), _name, _age, _cart) {
        this._userid = _userid;
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get userid() {
        return this._userid;
    }
    set userid(value) {
        this._userid = value;
    }
    addToCart(user, item) {
        user.cart.push(item);
    }
    removeFromCart(item, user) {
        let i = user.cart.length;
        while (i--) {
            if (user.cart[i] === item) {
                user.cart.splice(i, 1);
            }
        }
    }
    removeQuantityFromCart(item, user, num) {
        let n = user.cart.indexOf(item);
        user.cart.splice(n, num);
    }
    cartTotal(user) {
        console.log(`total price in ${user.name}'s cart is: ${user.cart.reduce((acc, item) => acc + item.price, 0)}$`);
        return user.cart.reduce((acc, item) => acc + item.price, 0);
    }
    printCart(user) {
        console.log(user.cart);
    }
}
//# sourceMappingURL=User.js.map