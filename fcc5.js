// Only change code below this line
class Thermostat {
  constructor(temperature) {
    this._temp = temperature;
  }
  // getter
  get temperature() {
    const convertToCelsius = (5 / 9) * (this._temp - 32);
    return convertToCelsius;
  }
  // setter
  set temperature(temp) {
    const convertToFahrenheit = (temp * 9.0) / 5 + 32;
    this._temp = convertToFahrenheit;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(`temp in fahrenheit ${thermos._temp}`);
console.log(`value returned when temp is celsius ${temp}`);
