import Product from "./components/Product";
import { menuItems } from "./data/db";

function App() {
  return (
    <div className="container">
      <div className="cards">
        <div className="card first-card">
          <section>
            <h2 className="card-title">Productos</h2>
            {menuItems.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </section>
          <div className="card-info">
            <p className="first-p-footer">@Gadiel Monteabaro</p>
          </div>
        </div>
        <div className="card second-card">
          <section>
            <h2 className="card-title">Orden</h2>
            <div className="card-item">
              <p>Pizza a la Leña Chica</p>
              <p>
                $30 <span className="item-quantity">x1</span>
              </p>
              <div className="card-buttons">
                <button className="item-icon increment">
                  <i className="ri-add-line"></i>
                </button>
                <button className="item-icon decrement">
                  <i className="ri-subtract-fill"></i>
                </button>
                <button className="item-icon delete">
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            </div>
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
