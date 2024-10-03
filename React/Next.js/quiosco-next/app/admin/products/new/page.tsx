import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

export default function CreateProductPage() {
  return (
    <>
      <Heading>Nuevo Producto</Heading>
      {/* Composición forma de incluir componentes de servidor y cliente juntos */}
      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  );
}
