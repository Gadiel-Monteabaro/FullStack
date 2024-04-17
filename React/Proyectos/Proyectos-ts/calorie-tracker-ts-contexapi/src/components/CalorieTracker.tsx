import CalorieDisplay from "./CalorieDisplay";
import { useActivity } from "../hooks/useActivity";

export default function CalorieTracker() {
  const { caloriesBurned, caloriesConsumed, netCalories } = useActivity();

  return (
    <>
      <div className="flex flex-col justify-around align-middle min-h-52 ">
        <h2 className="text-3xl font-black text-white text-center">
          Resumen de Calorias
        </h2>
        <div className="flex flex-col items-center md:flex-row md:justify-around gap-5 mt-5 md:mt-0 text-center">
          <CalorieDisplay calories={caloriesConsumed} text={"Consumidas"} />
          <CalorieDisplay calories={caloriesBurned} text={"Gastadas"} />
          <CalorieDisplay calories={netCalories} text={"Diferencia"} />
        </div>
      </div>
    </>
  );
}
