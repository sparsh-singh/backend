const axios = require("axios")
require("dotenv").config()
async function getTechStack(url, req , res) {
    const options = {
        method: "GET",
        url: "https://www.genelify.com/api/v1/technology-lookup",
        params: { url: url },
        headers: {
            "Content-Type": "application/json",
            "X-GENELIFY-API-KEY": process.env.X_GENELIFY_API_KEY,
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