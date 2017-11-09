const request = require('request');

function getWeather(latitude, longitude, callback) {
    request({
        url: `https://api.darksky.net/forecast/fd75303d917ff33cb2463ee2e2a46cce/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to DarkSky Weather API!');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 403) {
            callback('Unauthorized request');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
}

module.exports = {
    getWeather
}