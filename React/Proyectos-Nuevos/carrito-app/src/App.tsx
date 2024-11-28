import OrderItem from "./components/OrderItem";
import Product from "./components/Product";
import { MenuItem } from "./types";
import { useApp } from "./hooks/useApp";

function App() {
  const {
    data,
    order,
    addToOrder,
    productTotal,
    removeFromOrder,
    increaseQuantity,
  } = useApp();
  return (
    <div className="container">
      <div className="cards">
        <div className="card first-card">
          <section>
            <h2 className="card-title">Productos</h2>
            {data.map((item: MenuItem) => (
              <Product key={item.id} item={item} addToOrder={addToOrder} />
            ))}
          </section>
          <div className="card-info">
            <p className="first-p-footer">@Gadiel Monteabaro</p>
          </div>
        </div>
        <div className="card second-card">
          <section>
            <h2 className="card-title">Orden</h2>
            {order.map((product) => (
              <OrderItem
                key={product.id}
                product={product}
                productTotal={productTotal}
                removeFromOrder={removeFromOrder}
                increaseQuantity={increaseQuantity}
              />
            ))}
          </section>
          <div className="card-info">
            <p className="first-p-footer">@Gadiel Monteabaro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
