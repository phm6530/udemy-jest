import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { tailwindClassMapper } from "./helper";

test("버튼 click flow ", () => {
  render(<App />);

  // 버튼 찾기 (텍스트에 'blue'가 포함된 버튼)
  const btnElement = screen.getByRole("button", { name: /change to blue/i });

  // 초기 상태 확인 (빨간 배경)
  expect(btnElement).toHaveClass("bg-red-500");

  // 버튼 클릭
  fireEvent.click(btnElement);
  expect(btnElement).toHaveTextContent(/change to red/i);
  expect(btnElement).toHaveClass("bg-blue-500");
});

test("chk flow", () => {
  render(<App />);
  const btnElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /Chk/i,
  });

  expect(btnElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);

  fireEvent.click(btnElement);

  expect(checkboxElement).toBeChecked();
  expect(btnElement).toBeDisabled();

  expect(btnElement).toHaveClass("bg-zinc-900");
});

describe("tailwind 클래스 매퍼", () => {
  test("하이픈?", () => {
    expect(tailwindClassMapper("red")).toBe("bg-red-500");
  });
});
