import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Activity } from "../types";
import { categories } from "../data/category";

import { useActivity } from "../hooks/useActivity";

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};

export default function Form() {
  const [activity, setActivity] = useState<Activity>(initialState);

  const { state, dispatch } = useActivity();

  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter(
        (stateActivity) => stateActivity.id === state.activeId
      )[0];

      setActivity(selectedActivity);
    }
  }, [state.activeId]);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;

    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "save-activity", payload: { newActivity: activity } });

    setActivity({
      ...initialState,
      id: uuidv4(),
    });
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoria:
        </label>
        <select
          className="border-2 border-slate-300 p-2 rounded-lg w-full bg-white focus:outline-none focus:bg-white focus:border-lime-500 leading-tight"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          className="border-2 border-slate-300 p-2 rounded-lg w-full bg-white focus:outline-none focus:bg-white focus:border-lime-500 leading-tigh"
          type="text"
          id="name"
          name="name"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada"
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          className="border-2 border-slate-300 p-2 rounded-lg w-full bg-white focus:outline-none focus:bg-white focus:border-lime-500 leading-tigh"
          type="text"
          id="calories"
          name="calories"
          placeholder="Calorias. ej. 300 ó 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded disabled:opacity-20"
        type="submit"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
