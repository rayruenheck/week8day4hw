import { v4 as uuidv4 } from "uuid"

import Item from "./Item"

export default class User{
    constructor(
        private _userid: string = uuidv4(),
        private _name: string,
        private _age: number,
        private _cart: Item[]
    ){}
    public get cart(): Item[] {
        return this._cart
    }
    public set cart(value: Item[]) {
        this._cart = value
    }
    public get age(): number {
        return this._age
    }
    public set age(value: number) {
        this._age = value
    }
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get userid(): string {
        return this._userid
    }
    public set userid(value: string) {
        this._userid = value
    }
    addToCart(user:User,item:Item):void{
        user.cart.push(item)
    }
    removeFromCart(item:Item,user:User):void{
        let i = user.cart.length
        while(i--){
            if(user.cart[i]=== item){
                user.cart.splice(i,1)
            }
        }
    }
    removeQuantityFromCart(item:Item,user:User,num:number):void{
        let n = user.cart.indexOf(item)
        user.cart.splice(n,num)
    }
    cartTotal(user:User){
        console.log(`total price in ${user.name}'s cart is: ${user.cart.reduce((acc,item)=> acc+item.price,0)}$`)
        return user.cart.reduce((acc,item)=> acc+item.price,0)
        
    }
    printCart(user:User):void{
        console.log(user.cart)
    }
}