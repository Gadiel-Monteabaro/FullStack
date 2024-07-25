import { useState, ChangeEvent, FormEvent } from "react";
import { countries } from "../../data/countries";
import type { SearchType } from "../../types";
import styles from "./Form.module.css";
import Alert from "../Alert/Alert";

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>;
};

export default function Form({ fetchWeather }: FormProps) {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });
  /* Configuramos el state de alert */
  const [alert, setAlert] = useState("");

  /* handleChange nos permite obtener los datos de los formularios y guardarlos datos dentro del state. */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value, // El "name" hace referencia a la propiedad "name", para realizar la busqueda dentro de state
    });
  };

  /* handleSubmit nos permite validar los datos del state del formulario y comprobar los datos enviados son los correctos */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    setAlert("");

    fetchWeather(search);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="country">País:</label>

        <select
          name="country"
          id="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">Seleccione un País</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input className={styles.submit} type="submit" value="Consultar Clima" />
    </form>
  );
}
