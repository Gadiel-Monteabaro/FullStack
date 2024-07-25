import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";
import {
  getProducts,
  updateProductAvailability,
} from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import { Product } from "../types";

// Loaders obtener datos de una API, similar a useEffect y colocar la respuesta en un state
export async function loader() {
  const products = await getProducts();
  return products;
}

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  await updateProductAvailability(+data.id);
  return {};
}

export default function Products() {
  const products = useLoaderData() as Product[];

  return (
    <>
      <div className="flex justify-between px-2">
        <h2 className="text-2xl font-black text-slate-500">Productos</h2>
        <Link
          to="productos/nuevo"
          className="rounded-md bg-indigo-600 p-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"
        >
          Agregar Producto
        </Link>
      </div>
      <div className="px-2">
        <table className="w-full mt-5 table-auto ">
          <thead className="bg-slate-700 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Disponibilidad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
