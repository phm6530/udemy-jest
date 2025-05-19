import { screen } from "@testing-library/react";
import ScoopOptions from "../ScoopOptions";
import { render } from "../../../test-utils/testing-lib-provder";

test("옵션", async () => {
  render(<ScoopOptions />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2); //2개설정

  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
