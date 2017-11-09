const request = require('request');

const encodeAddress = (address) => encodeURIComponent(address);

const geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const encodedAddress = encodeAddress(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers');
            } else if (body.status === "ZERO_RESULTS") {
                reject('No results for given address');
            } else if (body.status === "OK") {
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });
            }
        });
    });
}

geocodeAddress('Meierijhoeven 66')
    .then(results => console.log('Success:', results))
    .catch(error => console.log('Error:', error));