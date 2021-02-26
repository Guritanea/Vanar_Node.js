const http = require('http')
 const {KEY, HOST, PATH}=require('./config')
// console.log(KEY, HOST, PATH)


const req = http.request({
    host:HOST,
    path:PATH
});
req.end();

req.on('connect', (info) => {
    console.log(`Got information prior to main response: ${info.statusCode}`);
  
});

//?q={city name}&appid={API key}"