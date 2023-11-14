
class   Cart {
items = [];
countItems = 0;

  constructor() {
    this.items = localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart'))) :  [];
    this.countItems = this.items.length;
  }

  addItemInCounter(item) {
    console.log(this.items)
        if(!this.items.includes(item)){
            this.countItems += 1;
            this.items.push(item);
            localStorage.setItem('cart',  JSON.stringify(this.items))
        }
    }
 removeItemCounter(item) {
    this.countItems -= 1;

    this.items = this.items.filter((itemInBusket) => itemInBusket !== item)

    localStorage.setItem('cart' , JSON.stringify(this.items));
}
}

export { Cart };