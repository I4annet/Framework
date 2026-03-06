import TampilanProduk from "../view/produk";

const halamanProdukServer = () => {
    return (
        <div>
            <h1>Halaman Produk Server</h1>
            <TampilanProduk products={[]}/>
        </div>
    )
}
export default halamanProdukServer;