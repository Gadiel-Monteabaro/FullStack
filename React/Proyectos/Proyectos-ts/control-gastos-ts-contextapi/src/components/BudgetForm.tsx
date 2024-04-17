import { useState, ChangeEvent, useMemo, FormEvent } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
  const [budget, setbudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setbudget(e.target.valueAsNumber);
  };

  // isValid, validación del botón
  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "add-budget", payload: { budget } });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-2xl text-blue-700 font-bold text-center"
        >
          Definir Presupuesto
        </label>
        <input
          id="budget"
          name="budget"
          type="number"
          placeholder="Define tu Presupuesto"
          value={budget}
          className="w-full bg-white border-2 border-gray-200 p-2 rounded-sm focus:outline-none focus:bg-white focus:border-blue-500  leading-tigh"
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value="Definir Presupuesto"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer uppercase p-2 text-white font-black rounded-sm w-full disabled:opacity-40"
        disabled={isValid}
      />
    </form>
  );
}
