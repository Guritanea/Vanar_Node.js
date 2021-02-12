
 const Item = require("./Item")

module.exports=class Drink extends  Item{
        constructor(id, name, price, volume){
        super(id, name, price, volume)
        this.volume=volume
        }
        print(){
            return `\n`.padStart(50, "-")+
            `${this.id}. ${this.name.padEnd(23)}:${this.volume.value} ${this.volume.unit} : ${((parseFloat(this.price.value).toFixed(2)).toString()).padEnd(6)}  ${this.price.currency}`//+
             
        }
    }     
