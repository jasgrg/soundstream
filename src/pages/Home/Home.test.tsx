import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe("Home Page", () => {
  it("renders the welcome message", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/Welcome to SoundStream/i)).toBeInTheDocument();
  });

  it("renders feature cards", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText(/High Quality Audio/i)).toBeInTheDocument();
    expect(screen.getByText(/Unlimited Library/i)).toBeInTheDocument();
    expect(screen.getByText(/Offline Mode/i)).toBeInTheDocument();
  });
});
