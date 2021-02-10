data = [10, 0.5, -2, "+100", -1.5, 25, "50", "0.5"]

function filterFormatted(data){
let a=[]
data.forEach(v=>typeof(v)=="number"?a.push(v):false)
//console.log(a)
    return a
}
filterFormatted(data)



