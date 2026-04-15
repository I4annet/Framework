import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TampilanLogin from "@/view/auth/login";
import TampilanRegister from "@/view/auth/register";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;
const signInMock = signIn as jest.Mock;

describe("Authentication views", () => {
  afterEach(() => {
    jest.resetAllMocks();
    (global as any).fetch = undefined;
  });

  it("submits the login form and redirects on success", async () => {
    const push = jest.fn();
    useRouterMock.mockReturnValue({ push, query: { callbackUrl: "/dashboard" } });
    signInMock.mockResolvedValue({ error: null });

    render(<TampilanLogin />);

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "password123" } });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(push).toHaveBeenCalledWith("/dashboard"));
  });

  it("submits the registration form and redirects on success", async () => {
    const push = jest.fn();
    useRouterMock.mockReturnValue({ push });
    (global as any).fetch = jest.fn(() => Promise.resolve({ status: 200 }));

    render(<TampilanRegister />);

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "password123" } });
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => expect(push).toHaveBeenCalledWith("/auth/login"));
  });
});
