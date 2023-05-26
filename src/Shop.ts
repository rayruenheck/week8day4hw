
import Item from "./Item";

export default class Shop{
    private _items: Item[] = [];
   
    constructor(
        private _item1: Item,
        private _item2: Item,
        private _item3: Item
    ){
        this._items.push(this._item1)
        this._items.push(this._item2)
        this._items.push(this._item3)
    }
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
    
    public get item3(): Item {
        return this._item3;
    }
    public set item3(value: Item) {
        this._item3 = value;
    }
    public get item2(): Item {
        return this._item2;
    }
    public set item2(value: Item) {
        this._item2 = value;
    }
    public get item1(): Item {
        return this._item1;
    }
    public set item1(value: Item) {
        this._item1 = value;
    }    
}