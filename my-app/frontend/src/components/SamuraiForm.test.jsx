import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SamuraiForm from "./SamuraiForm";

test("calls onAdd with correct data when form is submitted", async () => {
  const user = userEvent.setup();
  const onAdd = vi.fn();

  render(<SamuraiForm onAdd={onAdd} />);

  const inputs = screen.getAllByRole("textbox");
  const sendButton = screen.getByText("add");

  await user.type(inputs[0], "Yagyu Munenori");
  await user.type(inputs[1], "Yagyu");
  await user.type(inputs[2], "Katana");
  await user.click(sendButton);

  expect(onAdd.mock.calls).toHaveLength(1);
  expect(onAdd.mock.calls[0][0]).toEqual({
    name: "Yagyu Munenori",
    clan: "Yagyu",
    weapon: "Katana",
  });
});
