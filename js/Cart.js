
class   Cart {
items = [];
countitem = 0;

  constructor() {
    this.items = localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart'))) :  [];
    this.countitem = this.items.length;
  }

  addItemInCounter(item) {
    console.log(this.items)
        if(!this.items.includes(item)){
            this.countitem += 1;
            this.items.push(item);
            localStorage.setItem('cart',  JSON.stringify(this.items))
        }
    }
 removeItemCounter(item) {
    this.countitem -= 1;

    this.items = this.items.filter((ItemInBusket) => {
        ItemInBusket !== item;
    })

    localStorage.setItem('cart' , JSON.stringify(this.items));
}
}

export { Cart };