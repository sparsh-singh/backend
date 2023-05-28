// const axios = require("axios")
const request = require('request');
require("dotenv").config()
async function getTechStack(url, req , res) {
    console.log(url)
    var options = {
        'method': 'GET',
        'url': 'https://www.genelify.com/api/v1/technology-lookup?url='+url,
        'headers': {
          'X_GENELIFY_API_KEY': process.env.X_GENELIFY_API_KEY,
        }
      };

      
      request(options, function (error, response) {
        if (error) throw res.json(error);
        res.send(response.body);
      });    


}

module.exports = getTechStack