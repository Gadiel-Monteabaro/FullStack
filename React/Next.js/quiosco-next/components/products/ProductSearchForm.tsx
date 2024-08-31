"use client";

import { SearchSchema } from "@/src/schema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ProductSearchForm() {
  const router = useRouter();

  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get("search"),
    };

    const result = SearchSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    // redirect, en un futuro puede que no funciones, pero es lo mismo
    router.push(`/admin/products/search?search=${result.data.search}`);
  };

  return (
    <form action={handleSearchForm} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Buscar Producto"
        name="search"
        className="w-full p-2 border focus:outline-none focus:bg-white  focus:shadow-sm  focus:shadow-indigo-500 leading-tigh"
      />

      <input
        type="submit"
        value={`Buscar`}
        className="bg-indigo-600 text-sm p-2 uppercase text-white cursor-pointer rounded"
      />
    </form>
  );
}
