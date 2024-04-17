import { formatCurrency } from "../helpers";
import { OrderItem, MenuItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <div className="font-black text-3xl">Consumo</div>
      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t border-slate-400 py-4 last-of-type:border-b "
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-black  h-8 w-8 rounded-full"
                onClick={() => removeItem(item.id)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
