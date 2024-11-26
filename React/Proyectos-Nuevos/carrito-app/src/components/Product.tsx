import { MenuItem } from "../types";

type ItemProductProps = {
  item: MenuItem;
};

export default function Product({ item }: ItemProductProps) {
  return (
    <button className="product-item">
      <img src={`${item.img}.jpg`} alt="imagen del producto" />
      <p>{item.name}</p>
      <p>${item.price}</p>
    </button>
  );
}
