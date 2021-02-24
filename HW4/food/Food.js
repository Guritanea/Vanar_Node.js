const Item = require("./Item")

module.exports=class Food extends Item{
        constructor(id, name, price, weight ){
        super(id, name, price, weight)
        this.weight=weight
       }
       print(){
        return `\n`.padStart(50, "-")+
        `${this.id}. ${this.name.padEnd(23)}:${this.weight.value} ${this.weight.unit} : ${((parseFloat(this.price.value).toFixed(2)).toString()).padEnd(6)}  ${this.price.currency}`//+
       
    }
    }