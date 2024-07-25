import {
  Link,
  Form,
  ActionFunctionArgs,
  redirect,
  useFetcher,
} from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { removeProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await removeProduct(+params.id);
  }

  return redirect("/");
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const fetcher = useFetcher();
  const isAvailable = product.availability;

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-center text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-center text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-center text-gray-800">
        <fetcher.Form method="POST">
          <button
            type="submit"
            name="id"
            value={product.id}
            className={`${
              isAvailable ? "text-slate-600" : " text-red-600"
            } w-full p-2 font-bold text-sm hover:border-slate-800  rounded border border-slate-400`}
          >
            {isAvailable ? "Disponible" : "No Disponible"}
          </button>
        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-center text-gray-800 ">
        <div className="flex gap-3 justify-center items-center">
          <Link
            className="bg-indigo-600 w-full p-2 text-white font-bold text-sm  cursor-pointer rounded"
            to={`productos/${product.id}/editar`}
          >
            Editar
          </Link>
          <Form
            className="w-full"
            method="POST"
            action={`productos/${product.id}/eliminar`}
            onSubmit={(e) => {
              if (!confirm("¿Eliminar?")) {
                e.preventDefault();
              }
            }}
          >
            <input
              className="bg-red-600 w-full p-2 text-white font-bold text-sm  cursor-pointer rounded"
              type="submit"
              value="Eliminar"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}
