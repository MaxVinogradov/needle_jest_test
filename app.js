module.exports = require('needle').request(
    'get', 'https://data.42matters.com/api/v2.0/ios/apps/lookup.json',
    {
        access_token: 'e48ba097019beb8a7967b1c7ff837a1f5842528f',
        id: 343200656
    }, function (err, response, body) {
        console.log(err, response, body)
    });