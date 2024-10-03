import { prisma } from "@/src/lib/prisma";
import ImageUpload from "./ImageUpload";
import { Product } from "@prisma/client";

async function getCategories() {
  return await prisma.category.findMany();
}

type ProductFormProps = {
  product?: Product;
};

export default async function ProductForm({ product }: ProductFormProps) {
  const categories = await getCategories();

  return (
    <>
      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="name">
          Nombre:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full p-2 border focus:outline-none focus:bg-white  focus:shadow-sm  focus:shadow-indigo-500 leading-tigh"
          placeholder="Nombre Producto"
          defaultValue={product?.name}
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="price">
          Precio:
        </label>
        <input
          id="price"
          name="price"
          className="w-full p-2 border focus:outline-none focus:bg-white  focus:shadow-sm  focus:shadow-indigo-500 leading-tigh"
          placeholder="Precio Producto"
          defaultValue={product?.price}
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="categoryId">
          Categoría:
        </label>
        <select
          className="w-full p-2 border focus:outline-none focus:bg-white  focus:shadow-sm  focus:shadow-indigo-500 leading-tigh"
          id="categoryId"
          name="categoryId"
          defaultValue={product?.categoryId}
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <ImageUpload image={product?.image} />
    </>
  );
}
