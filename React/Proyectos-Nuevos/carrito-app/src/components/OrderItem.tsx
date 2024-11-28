import type { MenuItem, OrderItem } from "../types";

type OrderItemProps = {
  product: OrderItem;
  productTotal: (price: number, quantity: number) => number;
  removeFromOrder: (id: MenuItem["id"]) => void;
};

export default function OrderItem({
  product,
  productTotal,
  removeFromOrder,
}: OrderItemProps) {
  return (
    <div className="card-item">
      <div className="card-text">
        <p>{product.name}</p>
        <p>
          ${productTotal(product.price, product.quantity)}{" "}
          <span className="item-quantity">x{product.quantity}</span>
        </p>
      </div>
      <div className="card-buttons">
        <button className="item-icon increment">
          <i className="ri-add-line"></i>
        </button>
        <button className="item-icon decrement">
          <i className="ri-subtract-fill"></i>
        </button>
        <button
          onClick={() => removeFromOrder(product.id)}
          className="item-icon delete"
        >
          <i className="ri-delete-bin-line"></i>
        </button>
      </div>
    </div>
  );
}
