export default function OrderItem() {
  return (
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
  );
}
