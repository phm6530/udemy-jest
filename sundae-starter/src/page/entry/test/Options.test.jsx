import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToppingOption from "../ToppongOption";

test("토핑", async () => {
  const user = await userEvent.setup();
  render(<ToppingOption />);

  const listWrapper = screen.getByTestId("test");
  const items = await within(listWrapper).findAllByRole("generic");
  expect(items).toHaveLength(3);
});
