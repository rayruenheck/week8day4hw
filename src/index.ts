import Item from "./Item";
import Shop from "./Shop";
import User from "./User";
import {v4 as uuidv4} from 'uuid'
const apple = new Item(uuidv4(),'apple',3,'red delicious')
const orange = new Item(uuidv4(),'orange',2,'easy peel')
const banana = new Item(uuidv4(),'banana',1,'ripe and ready to go')


function Driver(name:string,age:number){
    const shop = new Shop(apple,orange,banana)
    const user = new User(uuidv4(),name,age,[])
    user.cart.push(shop.item1)
    user.cart.push(shop.item1)
    user.cart.push(shop.item1)
    user.cart.push(shop.item2)
    user.cart.push(shop.item2)
    user.cart.push(shop.item2)
    user.cart.push(shop.item3)
    user.cart.push(shop.item3)
    user.cart.push(shop.item3)
    user.cartTotal(user)
    user.printCart(user)
    user.removeFromCart(shop.item1,user)
    user.cartTotal(user)
    user.printCart(user)
    user.removeQuantityFromCart(shop.item2,user,2)
    user.cartTotal(user)
    user.printCart(user)


}
Driver('ray',25)   