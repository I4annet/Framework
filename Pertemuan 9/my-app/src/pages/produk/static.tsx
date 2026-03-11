import TampilanProduct from "../view/produk";
import { ProductType } from "../../types/product.type";

const halamanProdukStatic = (props: { products: ProductType[] }) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduct products={products} />
        </div>
    );
};
export default halamanProdukStatic;

export async function getStaticProps() {    
    const res = await fetch('http://127.0.0.1:3000/api/products');
    const response: { data: ProductType[] } = await res.json();
    return {
        props: {
            products: response.data,
        },
    };
}