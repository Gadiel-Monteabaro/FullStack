import { useMemo } from "react";
import { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  // Contadores
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [activities]
  );

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
