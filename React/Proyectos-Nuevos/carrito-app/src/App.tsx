function App() {
  return (
    <div className="container">
      <div className="cards">
        <div className="card first-card">
          <h2 className="card-title">Productos</h2>
          <button className="product-box">
            <img src="product.png" alt="imagen del producto" />
            <p>Product N°1 </p>
            <p>$15</p>
          </button>
          <button className="product-box">
            <img src="product.png" alt="imagen del producto" />
            <p>Product N°1</p>
            <p>$15</p>
          </button>
        </div>
        <div className="card second-card">
          <section></section>
          <footer className="footer">
            <p className="first-p-footer">Gadiel Monteabaro</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
