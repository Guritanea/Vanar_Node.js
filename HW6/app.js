const http = require('http');
//const { runInNewContext } = require('vm');
 const {KEY, HOST, PATH}=require('./config')
// console.log(KEY, HOST, PATH)
//HW1 Добавить интерактивность, прочитать название городв через консоль
//wh2 вывести в консоль температуру мин-макс, ветер...
//сделать интерактивное приложение в цикле
// предотвратить поевление ошибок

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const callback=( res )=>{

res.on('data',(chunk)=>{
       const data=JSON.parse(chunk.toString())
       if(data.cod=='404'){  
       console.log(`Error message for API: ${data.message}`)
    }
    else{
         console.log(`În oraşul:${data.name}`)
         console.log(`Astăzi va fi:`)
         console.log(`Temperatura minimă:${data.main.temp_min} kelvin`)
         console.log(`Temperatura minimă:${data.main.temp_max} kelvin"`)
         console.log(`Viteza vîntului:${data.wind.speed} km/h`)
         console.log(`Cerul: ${data.weather[0].description}`)    
    }
 })

//  res.on('connect',()=>{
//    console.log("API response CONNECT") 
// })
//  res.on('end',()=>{
//    console.log("API response ENDED") 
// })
//  res.on('error',()=>{
//     console.log("API response ERROR") 
//  })
 }

function mainLoop(){
   rl.question('Input the city: ', (city) => {
      if (city=="")
      process.exit()

   const req = http.request({
    host:HOST,
    path:PATH+`?q=${city}&appid=${KEY}&lang=ro`, 
    port:80, 
    metod:'GET'
}, callback)

setTimeout(mainLoop, 500);

req.end();
})
}

mainLoop()
