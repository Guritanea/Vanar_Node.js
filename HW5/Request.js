module.exports =class Request {

    constructor(options, callback) {
        this.options=options,
        this.callback=callback
       
    }

    end() {

        if(this.options.url = "dataprovider.example/data" ) {
            const res = {
                data: "Some dummy reponse data"
            }
            setTimeout(this.callback, 5000, res.data)
        }
    }

}
