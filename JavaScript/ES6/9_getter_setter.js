/*
    Las funciones getter están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

    Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto basado en el valor pasado a la función setter. Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior.
*/
class Thermostat {
    constructor(temperature) {
        this._temperature = temperature;
    }

    get temperature() {
        return 5 / 9 * (this._temperature - 32);
    }

    set temperature(value) {
        return this._temperature = value * 9.0 / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius

thermos.temperature = 26;

temp = thermos.temperature; // 26 en Celsius

console.log(temp);