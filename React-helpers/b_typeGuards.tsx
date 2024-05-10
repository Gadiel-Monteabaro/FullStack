/*
  Type Guards o Assertion
    Deciden que tipo de variable puede realizar determinadas acciones de forma segura  

    Esto es un ejemplo de respuesta de un API de Clima 

*/
type Weather = {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
};
// unknown No estamos seguros del tipo de dato que se puede recibir

function isWeatherResponse(weather: unknown): weather is Weather {
  return (
    Boolean(weather) &&
    typeof weather === "object" &&
    typeof (weather as Weather).name === "string" &&
    typeof (weather as Weather).main.temp === "number" &&
    typeof (weather as Weather).main.temp_max === "number" &&
    typeof (weather as Weather).main.temp_min === "number"
  );
}
/*
  const result = isWeatherResponse(weatherResult);

  if (result) {
    console.log(weatherResult.name);
  }
  
  Desventaja, no es un codigc facil de mantener
*/
