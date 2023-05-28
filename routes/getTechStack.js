const axios = require("axios")
require("dotenv").config()
async function getTechStack(url, req , res) {
    const options = {
        method: "GET",
        url: "https://www.genelify.com/api/v1/technology-lookup",
        params: { url: url },
        headers: {
            "Content-Type": "application/json",
            "X-GENELIFY-API-KEY": "62a97a3153c136252e66aeead667fdd1c03b220e1839e3694811e66f9539c64d",
        },
    }

    try {
        const response = await axios.request(options)
        res.json(response.data)

    } catch (error) {
        res.json({"error": error})
    }
}

module.exports = getTechStack