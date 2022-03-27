import { render, screen } from "@testing-library/react";
import App from "./App";

test("component renders", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

describe("children components render", () => {
  test("Navbar component renders", () => {
    render(<App />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  test("About component renders", () => {
    render(<App />);
    expect(screen.getByTestId("about")).toBeInTheDocument();
  });

  test("Skills component renders", () => {
    render(<App />);
    expect(screen.getByTestId("skills")).toBeInTheDocument();
  });

  test("Projects component renders", () => {
    render(<App />);
    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });

  test("Contact component renders", () => {
    render(<App />);
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });
});
