module.exports = require('needle').request(
    'get', 'https://ifconfig.co/json', {}, function (err, response, body) {
        console.log(err, response, body)
        close()
    });