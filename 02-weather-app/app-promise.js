const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch the weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
    .then(response => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address');
        }

        const latitude = response.data.results[0].geometry.location.lat;
        const longitude = response.data.results[0].geometry.location.lat;
        const weatherUrl = `https://api.darksky.net/forecast/fd75303d917ff33cb2463ee2e2a46cce/${latitude},${longitude}`
        console.log('Address:', response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
    })
    .then(response => {
        const temperature = response.data.currently.temperature;
        const apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature} but it feels like ${apparentTemperature}`);
    })
    .catch(error => {
        if (error.code === 'ENOTFOUND') {
            console.log('Unable to connect to API servers.');
        } else {
            console.log(error.message);
        }
    });