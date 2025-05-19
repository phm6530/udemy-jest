import { render } from "@testing-library/react";
import { OrderProvider } from "../context/order-provider";

const renderWithContext = (ui, options) => {
  render(ui, { wrapper: OrderProvider, ...options });
};

export { renderWithContext as render };
