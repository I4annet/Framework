import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import AboutPage from "@/pages/about/index";
import Custom404 from "@/pages/404";

describe("Static page rendering", () => {
  it("renders home page content", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /praktikum next\.js pages router/i })).toBeInTheDocument();
    expect(screen.getByText(/Mahasiswa D4 Pengembangan Web/i)).toBeInTheDocument();
  });

  it("renders about page content", () => {
    render(<AboutPage />);
    expect(screen.getByTestId("title")).toHaveTextContent("About Page");
  });

  it("renders 404 page content and back link", () => {
    render(<Custom404 />);
    expect(screen.getByRole("heading", { name: /404/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /kembali ke home/i })).toBeInTheDocument();
  });
});
