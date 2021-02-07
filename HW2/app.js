console.log("App stariting...")

let config = require("./temperatures.json")

const {div,mul,add,sub} = require("./math")

// let isNumber = require("./type")
let s=0
let n=0
config.forEach(v=>typeof v=== 'number'? n=add(n,v):s=add(s,1))

console.log("Average temperature=", div(n,(config.length-s)))
console.log("Error=", div(mul(s,100),config.length)+"%")

console.log("App finished...")