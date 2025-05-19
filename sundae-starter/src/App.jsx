import { OrderProvider } from "./context/order-provider";
import ToppingOption from "./page/entry/ToppongOption";
import OrderSummary from "./page/summary/order-summary";

function App() {
  return (
    <OrderProvider>
      <div>
        <h1>Sundaes on Demand</h1>
        <OrderSummary />
        <ToppingOption />
      </div>
    </OrderProvider>
  );
}

export default App;
