//HW1: add field "id" 
//HW2: make price ->{Value: 1.00, currency:"USD"}
//HW3 переделать чтобы красивее выводилось на экран print()->align


// реализация 1
    module.exports=class Item {
        constructor (id, name, value, currency){
            this.id=id
            this.name=name
            this.price={
                        value:value, 
                        currency:currency
                    }
        }
//Реализация 2
        // class Price {
        //     constructor(value, currency){
        //         this.value=value
        //         this.currency=currency
        //     }
        // }
        // module.exports= class Items extends Price{
        //     constructor(id, name, value, currency){
        //         super(value, currency)
        //         this.id=id
        //         this.name=name
        //     }    
        
    print(){
        return `\n`.padStart(40, "-")+
        `${this.id}. ${this.name.padEnd(23)}:${((parseFloat(this.price.value).toFixed(2)).toString()).padEnd(6)}  ${this.price.currency}  \n`+
        `\n`.padStart(40, "-")
    }
}

