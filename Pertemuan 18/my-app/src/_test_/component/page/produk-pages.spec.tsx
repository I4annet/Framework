import { render, screen } from "@testing-library/react";
import ProductsIndexPage from "@/pages/produk/index";
import ProdukStaticPage, { getStaticProps as getStaticPropsStatic } from "@/pages/produk/static";
import ProdukServerPage, { getServerSideProps } from "@/pages/produk/server";
import ProductDetailPage, { getStaticPaths, getStaticProps as getProductStaticProps } from "@/pages/produk/[produk]";
import { ProductType } from "@/types/Product.type";
import useSWR from "swr";

jest.mock("next/router", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockedUseSWR = useSWR as jest.Mock;

describe("Produk pages and data fetching", () => {
  const products: ProductType[] = [
    {
      id: "1",
      name: "Produk A",
      price: 10000,
      category: "Elektronik",
      image: "/produk-a.png",
    },
  ];

  beforeEach(() => {
    mockedUseSWR.mockReturnValue({ data: { data: products }, error: null, isLoading: false });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders the produk index page with product list", () => {
    render(<ProductsIndexPage />);
    expect(screen.getByText(/Daftar Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Produk A/i)).toBeInTheDocument();
  });

  it("renders the static produk page with props", () => {
    render(<ProdukStaticPage products={products} />);
    expect(screen.getByRole("heading", { name: /Halaman Produk Static/i })).toBeInTheDocument();
    expect(screen.getByText(/Produk A/i)).toBeInTheDocument();
  });

  it("renders the server produk page with props", () => {
    render(<ProdukServerPage products={products} />);
    expect(screen.getByRole("heading", { name: /Halaman Produk Server/i })).toBeInTheDocument();
    expect(screen.getByText(/Produk A/i)).toBeInTheDocument();
  });

  it("builds static paths and props for product detail page", async () => {
    const product = products[0];
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: [product] }),
      }),
    );

    const pathsResult = await getStaticPaths();
    expect(pathsResult).toEqual({ paths: [{ params: { produk: "1" } }], fallback: false });

    const propsResult = await getProductStaticProps({ params: { produk: "1" } } as any);
    expect(propsResult).toEqual({ props: { product } });
  });

  it("fetches products in server side and static props functions", async () => {
    const productsResult: ProductType[] = [
      {
        id: "2",
        name: "Produk B",
        price: 20000,
        category: "Fashion",
        image: "/produk-b.png",
      },
    ];

    (global as any).fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: productsResult }),
      }),
    );

    const serverResult = await getServerSideProps();
    expect(serverResult).toEqual({ props: { products: productsResult } });

    const staticResult = await getStaticPropsStatic();
    expect(staticResult).toEqual({ props: { products: productsResult }, revalidate: 10 });
  });

  it("renders product detail page with props", () => {
    render(<ProductDetailPage product={products[0]} />);
    expect(screen.getByText(/Detail Produk/i)).toBeInTheDocument();
    expect(screen.getByText(/Produk A/i)).toBeInTheDocument();
  });
});
