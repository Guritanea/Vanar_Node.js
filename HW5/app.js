
const Request = require("./Request")

const req = new Request({ url: "dataprovider.example/data"}, function(res) {
    
    console.log(res)
})


req.end() 