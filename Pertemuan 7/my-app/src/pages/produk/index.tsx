import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../view/produk";

const kategori = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/produk")
            .then((response) => response.json())
            .then(responesedata => {
                setProducts(responesedata.data);
            })
            .catch((error) => {
              console.error("Error fetching products:", error);
            });
    }, []);
//   const { push } = useRouter();
//   useEffect(() => {
//     const loginStatus = localStorage.getItem("isLogin") === "true";
//     if (!loginStatus) {
//       push("/auth/login");
//     }
//   }, [push]);
//   return <TampilanProduk />;
  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
};

export default kategori;