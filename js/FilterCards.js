class FilterCards {
  type = null;
  limit = 6;
  items = [];

  constructor(type, limit, items) {
    this.type = type;
    this.limit = limit;
    this.items = items;
  }

  setUpType(type) {
    this.type = type;
  }

  setUpLimit(limit) {
    this.limit = limit;
  }

  getFilteredItems() {
    if (this.type) {
      return this.items
        .filter((item) => item.type === this.type)
        .slice(0, this.limit);
    }
    return this.items.slice(0, this.limit);
  }
}

export { FilterCards };
