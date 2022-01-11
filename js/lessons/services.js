const axios = require('axios');

const service = (url) => axios.get(url)

module.exports = {
    service
}
