export const generarId = () => {
  const random = Math.random().toString(36).slice(2);
  const fecha = Date.now().toString(36);

  return random + fecha;
};

export const formatearFecha = (fecha) => {
  const event = new Date(fecha);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return event.toLocaleDateString("es-AR", options);
};

export const formatearCantidad = (cantidad) => {
  const locales = "en-US";

  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const formatterDolar = new Intl.NumberFormat(locales, options);
  return formatterDolar.format(cantidad);
};
