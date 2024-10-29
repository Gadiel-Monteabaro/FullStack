import { OrderWithProducts } from "@/src/types";

type LatestOrderItemProps = {
  order: OrderWithProducts;
};

export default function LatestOrderItem({ order }: LatestOrderItemProps) {
  return (
    <div className="bg-white shadow shadow-yellow-200 p-5 rounded-lg">
      <p className="text-lg font-bold text-slate-700">Cliente : {order.name}</p>
      <ul
        role="list"
        className="divide-y divide-gray-800 border-t border-gray-200 text-sm font-medium text-gray-500"
      >
        {order.orderProducts.map((product) => (
          <li key={product.id} className="flex py-4 text-lg">
            <p>
              <span className="font-bold">({product.quantity}) </span>
              {product.product.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
