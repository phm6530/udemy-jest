import { screen } from "@testing-library/react";
import { render } from "../../../test-utils/testing-lib-provder";
import Options from "../Options";
import userEvent from "@testing-library/user-event";

test("옵션 핸들링", async () => {
  const user = userEvent.setup();
  render(<Options />);

  const totalScoops = screen.getByText("Scoops total $", { exact: false });
  expect(totalScoops).toHaveTextContent("0.00");

  const scoopsInput = screen.getByRole("spinbutton");
  expect(scoopsInput).toHaveValue(0); //0 chk

  //   1증가
  await user.clear(scoopsInput);
  await user.type(scoopsInput, "1");

  expect(totalScoops).toHaveTextContent("2.00");
});
