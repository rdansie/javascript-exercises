const convertToCelsius = function(fahrenheit) {
  let conversion = ((fahrenheit - 32) * (5/9));
  if (conversion % 1 === 0) return conversion;
  return Number(conversion.toFixed(1));

};

const convertToFahrenheit = function(celsius) {
  let conversion = (celsius * (9/5) + 32);
  if (conversion % 1 === 0) return conversion;
  return Number(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};



//fahrenheit to celsius = (x - 32) * 5/9

//celsius to fahrenheit = (x * 9/5 + 32)



//take input and run through equation
//round number to 1 decimal point (num.toFixed(1))