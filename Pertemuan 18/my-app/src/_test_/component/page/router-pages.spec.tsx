import { render, screen } from "@testing-library/react";
import BlogDetailPage from "@/pages/blog/[slug]";
import ShopPage from "@/pages/shop/[[...slug]]";
import HalamanProfile from "@/pages/profile/index";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;
const useSessionMock = useSession as jest.Mock;

describe("Router and session pages", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders blog page with query slug", () => {
    useRouterMock.mockReturnValue({ query: { slug: "test-blog" } });
    render(<BlogDetailPage />);
    expect(screen.getByText(/Slug: test-blog/i)).toBeInTheDocument();
  });

  it("renders shop page with slug array", () => {
    useRouterMock.mockReturnValue({ query: { slug: ["electronics", "gaming"] } });
    render(<ShopPage />);
    expect(screen.getByText(/Toko: electronics-gaming/i)).toBeInTheDocument();
    expect(screen.getByText(/Kategori: electronics/i)).toBeInTheDocument();
  });

  it("renders profile page when session exists", () => {
    useSessionMock.mockReturnValue({ data: { user: { fullname: "Test User" } } });
    render(<HalamanProfile />);
    expect(screen.getByText(/Selamat Datang Test User/i)).toBeInTheDocument();
  });
});
