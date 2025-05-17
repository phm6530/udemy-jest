import { render, screen, fireEvent } from "@testing-library/react";
import SummryForm from "./summry-form";

test("체크 박스 플로우", () => {
  render(<SummryForm />);
  //   btn
  const btn = screen.getByRole("button");
  expect(btn).toBeDisabled();

  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();

  //   chkbox
  fireEvent.click(checkboxElement);
  expect(btn).toBeEnabled();
});
