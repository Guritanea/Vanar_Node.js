const RandomDataProvider= require('./provider.js')

const rdp = new RandomDataProvider( 0, 100 ) 

let randomInts = [] 
let n
while( (n = rdp.next()) && randomInts.length != 10 ) {
    
   randomInts.includes( n ) ? undefined :  randomInts.push( Math.round(n) )
   //проверяем содержит ли масив указаный елемент, если не содержи добавляем его в масив

}
console.log(n,randomInts) 
