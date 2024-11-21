const Header = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  cartTotal,
}) => {
  return (
    <>
      <header className="header">
        <div>
          <nav>
            <div className="carrito">
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />
              <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((guitar) => (
                          <tr key={guitar.id}>
                            <td>{guitar.name}</td>
                            <td className="font-bold">${guitar.price}</td>
                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => decreaseQuantity(guitar.id)}
                              >
                                -
                              </button>
                              {guitar.quantity}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => increaseQuantity(guitar.id)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn "
                                type="button"
                                onClick={() => removeFromCart(guitar.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-end">
                      Total pagar: <span className="fw-bold">${cartTotal}</span>
                    </p>
                  </>
                )}

                <button
                  className="btn btn-dark w-100 mt-3 p-2"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
