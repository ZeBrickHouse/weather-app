const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/86b3a847a13106e05e8b727bc63069a6/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        summary: body.currently.summary,
        precipProbability: body.currently.precipProbability
      });
    } else {
      callback('Unable to Fetch Weather.');
    };
  });

};


module.exports.getWeather = getWeather;
