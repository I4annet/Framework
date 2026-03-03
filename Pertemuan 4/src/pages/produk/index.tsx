import { useRouter } from "next/router";
import { useEffect } from "react";
import TampilanProduk from "../view/produk";

const ProdukPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin") === "true";
    if (!loginStatus) {
      push("/auth/login");
    }
  }, [push]);

  return <TampilanProduk />;
};

export default ProdukPage;