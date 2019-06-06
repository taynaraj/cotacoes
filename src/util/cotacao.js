const request = require('request')

const api_token='6o3NVHRlnANCA5nv3zdNW8FRjg38We4OE96DAgcOYPPeQts8NduStdab5gme'

const cotacao = (symbol,callback) =>{
    
    const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`
    
    request({url: url, json: true}, (err,response)=>{
        
        if(err){
      
            return callback({
                mensage:`Something went wrong: ${err}`,
                code: 500  
            },undefined)
        }

        

        if(response.body== undefined|| response.body.data === undefined){
            callback({
                mensage:`No data found`,
                code: 404
            },undefined)
        }
        const parsedJSON = response.body.data[0] 
        const {symbol, price_open, price, day_high, day_low} = parsedJSON
  


        callback(undefined, {symbol, price_open, price, day_high, day_low})
    })
}
module.exports =cotacao