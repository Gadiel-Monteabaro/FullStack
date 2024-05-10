import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "add-filter-category", payload: { id: e.target.value } });
  };

  return (
    <div className=" bg-white shadow-lg rounded-lg p-5">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category">Filtrar Gastos</label>
          <select
            id="category"
            className=" w-2/5 bg-white border-2 border-gray-200 p-2 rounded-sm focus:outline-none focus:bg-white focus:border-blue-500  leading-tigh"
            onChange={handleChange}
          >
            <option value="">-- Todas las Categorias --</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
