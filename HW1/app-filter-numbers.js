data = [10, 0.5, -2, "+100", -1.5, 25, "50", "0.5"]

function filterFormatted(data){
    // 1 вариант реализации
    // let a= data.filter(item=>typeof(item)!="string")
    // console.log(a)
//-----------------------------------
    //2вариант реализации
   let a=[]
    data.filter(v=>typeof(v)!="string").forEach(v=>{a.push(v)})
    console.log(a)
}
 filterFormatted(data)



