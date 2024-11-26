import Product from "./components/Product";
import { menuItems } from "./data/db";

function App() {
  return (
    <div className="container">
      <div className="cards">
        <div className="card first-card">
          <h2 className="card-title">Productos</h2>
          <div className="product-container">
            {menuItems.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="card second-card">
          <section></section>
          <footer className="footer">
            <p className="first-p-footer">@Gadiel Monteabaro</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;