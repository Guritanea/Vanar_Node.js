//HW1: add field "id" 
//HW2: make price ->{Value: 1.00, currency:"USD"}
//HW3 переделать чтобы красивее выводилось на экран print()->align


class Price {
    constructor(value, currency){
        this.value=value
        this.currency=currency
    }
}
module.exports= class Items extends Price{
    constructor(id, name, value, currency){
        super(value, currency)
        this.id=id
        this.name=name
    }

       print(){
        return `\n`.padStart(40, "-")+
        `${this.id}. ${this.name.padEnd(23)}:${((parseFloat(this.value).toFixed(2)).toString()).padEnd(6)}  ${this.currency}  \n`+
        `\n`.padStart(40, "-")
         }
}