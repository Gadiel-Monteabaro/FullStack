import styles from "./App.module.css";
import Alert from "./components/Alert/Alert";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetaild/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, loading, notFound, fetchWeather, hasWeatherData } =
    useWeather();

  return (
    <>
      <h1 className={styles.title}>Aplicación de Clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>

      <Footer />
    </>
  );
}

export default App;
