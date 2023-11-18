class Cart {
  items = [];
  countItems = 0;

  constructor() {
    this.items = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    this.countItems = this.items.length;
  }

  addItem(item) {
    if (
      this.items.length &&
      this.items.find((cartItem) => cartItem.id === item.id)
    ) {
      return;
    }

    this.countItems += 1;
    this.items.push(item);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }
  removeItem(item) {
    this.countItems -= 1;

    this.items = this.items.filter((itemInBusket) => itemInBusket !== item);

    localStorage.setItem("cart", JSON.stringify(this.items));
  }
}

export { Cart };
