function celsiusToFahrenheit(celsius) {
    let celsiusInF = (celsius*9)/5 + 32;
    console.log(celsius + '°C in Fahrenheit is ' + celsiusInF + '°F');
}
celsiusToFahrenheit(90);
  
function fahrenheitToCelsius(fahrenheit) {
    let fahrenheitInC = ((fahrenheit - 32)*5)/9;
    console.log(fahrenheit + '°F in Celcius is ' + Math.round(fahrenheitInC) + '°C');
}
fahrenheitToCelsius(194);