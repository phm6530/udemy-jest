import { render, screen, fireEvent } from "@testing-library/react";
import SummryForm from "./summry-form";
import userEvent from "@testing-library/user-event";

test("체크 박스 플로우", async () => {
  const user = await userEvent.setup();
  render(<SummryForm />);
  //   btn
  const btn = screen.getByText("confirm");
  expect(btn).toBeDisabled();

  const checkboxElement = screen.getByRole("checkbox");
  expect(checkboxElement).not.toBeChecked();

  //   chkbox
  await user.click(checkboxElement);
  expect(btn).toBeEnabled();

  await user.click(checkboxElement);
  expect(btn).toBeDisabled();
});

// 사용자 기준으로 함
test("팝업 핸들링", async () => {
  const user = await userEvent.setup();
  render(<SummryForm />);

  const target = screen.getByText(/overTarget/i);
  await user.hover(target);
  const popover = screen.queryByText("test");
  expect(popover).toBeInTheDocument();

  await user.unhover(target);
  expect(popover).not.toBeInTheDocument();
});
