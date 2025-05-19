import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToppingOption from "../ToppongOption";
import { OrderProvider } from "../../../context/order-provider";

test("토핑", async () => {
  const user = await userEvent.setup();
  render(<ToppingOption />, { wrapper: OrderProvider });

  const listWrapper = screen.getByTestId("test");
  const items = await within(listWrapper).findAllByRole("generic");
  expect(items).toHaveLength(3);
});
