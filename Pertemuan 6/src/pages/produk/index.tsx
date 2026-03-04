import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import TampilanProduk from "../view/produk";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
}

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
      <h1>Daftar Produk</h1>
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;