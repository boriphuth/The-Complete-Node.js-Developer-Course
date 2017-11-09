const request = require('request');

function encodeAddress(address) {
    return encodeURIComponent(address);
}

function geocodeAddress(address, callback) {
    const encodedAddress = encodeAddress(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers');
        } else if (body.status === "ZERO_RESULTS") {
            callback('No results for given address');
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports = {
    geocodeAddress
}

