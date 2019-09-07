class ShoppingCart{

    constructor(){

        this.Items = []

    }

    getItems(){

        return this.Items

    }

    addItem(itemName, quantity, price){

        const itemToAdd = {name: itemName, quantity: quantity, pricePerUnit: price}
        this.Items.push(itemToAdd)

    }

    clear(){

        this.Items = []

    }

    total(){

        return this.Items.reduce((totalPrice, nextPrice) => 
        totalPrice + nextPrice.quantity*nextPrice.pricePerUnit, 0)

    }
}


module.exports = ShoppingCart