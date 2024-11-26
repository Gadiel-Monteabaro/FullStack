import { MenuItem } from "../types";

type ItemProductProps = {
  item: MenuItem;
};

export default function Product({ item }: ItemProductProps) {
  return (
    <button className="product-box">
      <img src={`${item.img}`} alt="imagen del producto" />
      <p>{item.name}</p>
      <p>${item.price}</p>
    </button>
  );
}
