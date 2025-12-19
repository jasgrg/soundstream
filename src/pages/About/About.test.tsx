import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Page", () => {
  it("renders the about title", () => {
    render(<About />);
    expect(screen.getByText(/About SoundStream/i)).toBeInTheDocument();
  });

  it("renders mission section", () => {
    render(<About />);
    expect(screen.getByText(/Our Mission/i)).toBeInTheDocument();
  });
});
