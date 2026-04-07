import fetcher from "@/utils/swr/fetcher"
import DetailProduk from "@/view/DetailProduct";
import {ProductType} from "@/types/Product.type";
import { useRouter } from "next/router";
import useSWR from "swr";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  {/digunakan client-side rendering/}  // const Router = useRouter();
  // console.log(Router);
  // const { query } = useRouter();
  // const{data, error, isLoading} = useSWR(`/api/products/${query.produk}`,fetcher);

  // return (
  //   <div>
  //      < DetailProduk products={isLoading ?[] : data.data} />
  //   </div>
  // );

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

{/digunakan server-side rendering/}
// export async function getServerSideProps({ params}: {params: {produk: string}}) {
//   const res = await fetch(`http://localhost:3000/api/products/${params?.produk}`);
//   const response = await res.json();
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// };

{/digunakan static-site generation/}
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const response = await res.json();
  const paths = response.data.map((product: ProductType) => ({
    params: { produk: product.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({params}:{params:{produk:string}}) {
  const res = await fetch(`http://localhost:3000/api/products/${params?.produk}`);
  const response: { data: ProductType } = await res.json();
  return {
    props: {
      product: response.data,
    },
  };
}