import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const total = useMemo(() => tipAmount + subtotalAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <div className="font-black text-2xl">Totales y Propinas</div>
        <p>
          Subtotal a Pagar: {""}
          <span className="font-black">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propinas: {""}
          <span className="font-black">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a Pagar: {""}
          <span className="font-black">{formatCurrency(total)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black uppercase text-white font-bold p-3 disabled:opacity-50"
        disabled={total === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
