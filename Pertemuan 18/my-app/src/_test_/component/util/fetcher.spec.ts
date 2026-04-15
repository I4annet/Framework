import fetcher from "@/utils/swr/fetcher";

describe("fetcher util", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls fetch and returns parsed JSON", async () => {
    (global as any).fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ hello: "world" }) }),
    );

    const result = await fetcher("/api/test");

    expect(result).toEqual({ hello: "world" });
    expect((global as any).fetch).toHaveBeenCalledWith("/api/test");
  });
});
