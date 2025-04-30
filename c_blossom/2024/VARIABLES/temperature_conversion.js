/*
To convert temperature in Kelvin to Celsius, subtract 273.15 from the Kelvin temperature. 

For instance if temperature is 1K, then subtract 273.15 to get -272.15°C.

To convert temperature in Celsius to Kelvin, add 273.15 to the Celsius temperature.

To convert tempertaure in Celsius to Fahrenheit, multiply the Celsius temperature by 9/5 and add 32.

To convert temperature in Fahrenheit to Celsius, subtract 32 from the Fahrenheit temperature and then multiply by 5/9.
*/

function kelvinToFahrenheit(kelvin) {
  // Kevin can not be less than 0.
  if (kelvin < 0) {
    return "Kelvin can not be less than 0";
  }

  // Convert Kelvin to Celsius by subtracting 273.15 from Kelvin.
  // Convert Celsius to Fahrenheit by multiplying by 9/5 and adding 32.
  // floor the result to get the nearest whole number.
  return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
}

console.log(kelvinToFahrenheit(0));
