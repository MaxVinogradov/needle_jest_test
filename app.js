module.exports = require('needle').request(
    'get', 'http://www.whatarecookies.com/cookietest.asp', {}, function (err, response, body) {
        console.log(err, response, body);
    });