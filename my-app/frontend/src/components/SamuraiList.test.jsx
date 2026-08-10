import { render, screen } from "@testing-library/react";
import SamuraiList from "./SamuraiList";

test("renders samurai names, clans and weapons", () => {
  const samurais = [
    { id: 1, name: "Miyamoto Musashi", clan: "Ronin", weapon: "Nitoryu" },
  ];

  render(<SamuraiList samurais={samurais} onDelete={() => {}} />);

  expect(screen.getByText(/Miyamoto Musashi/)).toBeDefined();
  expect(screen.getByText(/Ronin/)).toBeDefined();
  expect(screen.getByText(/Nitoryu/)).toBeDefined();
});
