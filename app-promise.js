const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD51IfdLLIHik9TU8vY1fRLgwGcuVUk0k0`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === "ZERO_RESULTS") {
    throw new Error('Unable to locate address.');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/86b3a847a13106e05e8b727bc63069a6/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  var summary = response.data.currently.summary;
  var precipProbability = response.data.currently.precipProbability;

  console.log(`Today is ${summary}.  It's currently ${temperature}.  It feels like ${apparentTemperature}.  There is a ${precipProbability}% chance of rain.`);
}).catch((e) => {
  if (e.code === "ENOTFOUND") {
    console.log("Unable to connect to API servers.");
  } else {
    console.log(e.message);
  }
});
