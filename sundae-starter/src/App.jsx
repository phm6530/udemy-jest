import ToppingOption from "./page/entry/ToppongOption";
import OrderSummary from "./page/summary/order-summary";

function App() {
  return (
    <div>
      <h1>Sundaes on Demand</h1>
      <OrderSummary />
      <ToppingOption />
    </div>
  );
}

export default App;
