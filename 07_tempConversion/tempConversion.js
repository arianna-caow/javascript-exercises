const convertToCelsius = function(fahren) {
  return Math.round((fahren-32)*50/9)/10;
};

const convertToFahrenheit = function(celcius) {
  return Math.round((celcius)*90/5)/10+32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
