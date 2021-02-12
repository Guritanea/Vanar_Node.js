// const Item = require("./Item")
const Item = require("./Item")
const Price = require("./Price")
const Measurement=require("./physical")
const Drink=require("./Drink")
const Food=require("./Food")

module.exports.menu=[ 
         // new Item(1.,"Salad", new Price(10, "MDL")) 
         // new Item(2.,"Soup", 25.00,  "LEI"),
         // new Item(3.,"Bread", 5.00,  "LEI"),
          new Drink(1, "Cola", new Price(10, "MDL"), new Measurement(0.3,"L")),
          new Drink(2, "Fanta", new Price(10, "MDL"), new Measurement(0.3,"L")),
          new Drink(3, "Beer", new Price(15, "MDL"), new Measurement(0.5,"L")),
          new Food(1, "Salad", new Price(20, "MDL"), new Measurement(350,"gr")),
          new Food(2, "Soup", new Price(25, "MDL"), new Measurement(400,"gr")),
          new Food(3, "Nuggets", new Price(20, "MDL"), new Measurement(350,"gr")) 
        ]
