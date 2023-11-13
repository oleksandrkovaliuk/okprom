
class CounterItems {
    btnId = [];
    countitem = 0;

    constructor(btnId, countitem){
        this.btnId = btnId;
        this.counitem = countitem;
    }
    addItemInCounter(){
        this.countitem += 1;

        localStorage.setItem('cart' , JSON.stringify(this.btnId));
        return this.countitem;
    }

}

export{CounterItems};


