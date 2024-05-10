import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import OrderTotals from "./components/OrderTotals";
import useOrder from "./hooks/useOrder";
import { OrderContents } from "./components/OrderContents";
import { TipPercentageForm } from "./components/TipPercentageForm";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <header className=" bg-slate-900 py-7">
        <h1 className="text-center text-xl font-black  text-slate-200">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className=" max-w-7xl  mx-auto py-20 grid md:grid-cols-2 gap-3">
        <div className="p-5">
          <h2 className="text-3xl font-black">Menú</h2>

          <div className=" space-y-3 mt-5">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className=" p-5 rounded-lg space-y-10 ">
          {order.length ? (
            <>
              <div className=" h-80 p-4 border border-slate-300 overflow-y-auto scroll ">
                <OrderContents order={order} removeItem={removeItem} />
              </div>
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">No hay Ordenes</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
