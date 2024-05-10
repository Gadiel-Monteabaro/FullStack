import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import type { DraftExpense, Value } from "../types";
import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    expenseName: "",
    amount: 0,
    category: "",
    date: new Date(),
  });

  const [error, setError] = useState("");
  const [previousAmount, setPreviousAmount] = useState(0);
  const { state, dispatch, remainingBudget } = useBudget();

  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.filter(
        (currentExpense) => currentExpense.id === state.editingId
      )[0];
      setExpense(editingExpense);
      setPreviousAmount(editingExpense.amount);
    }
  }, [state.editingId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);

    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  };

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (expense.amount - previousAmount > remainingBudget) {
      setError("Ese gasto se sale del presupuesto.");
      return;
    }

    //Agregar o Actualizar el Gasto
    if (state.editingId) {
      dispatch({
        type: "update-expense",
        payload: { expense: { id: state.editingId, ...expense } },
      });
    } else {
      dispatch({ type: "add-expense", payload: { expense } });
    }

    setPreviousAmount(0);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center text-2xl font-black border-b-4  border-blue-500 py-2">
        {state.editingId ? "Guardar Gasto" : "Nuevo Gasto"}
      </legend>
      {error && <ErrorMessage> {error}</ErrorMessage>}
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Nombre Gasto:
        </label>
        <input
          id="expenseName"
          name="expenseName"
          type="text"
          value={expense.expenseName}
          onChange={handleChange}
          placeholder="Añade el nombre del gasto"
          className="w-full bg-white border-2 border-gray-200 p-2 rounded-sm focus:outline-none focus:bg-white focus:border-blue-500  leading-tigh"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad:
        </label>
        <input
          id="amount"
          name="amount"
          type="text"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Añade la cantidad gastada: ej. 300"
          className="w-full bg-white border-2 border-gray-200 p-2 rounded-sm focus:outline-none focus:bg-white focus:border-blue-500  leading-tigh"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseCategory" className="text-xl">
          Categoria:
        </label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          className="w-full bg-white border-2 border-gray-200 p-2 rounded-sm focus:outline-none focus:bg-white focus:border-blue-500  leading-tigh"
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Fecha Gasto:
        </label>
        <DatePicker
          className="bg-slate-100 p-2 border-0"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-sm"
        value={state.editingId ? "Guardar Cambios" : "Registrar Gasto"}
      />
    </form>
  );
}
