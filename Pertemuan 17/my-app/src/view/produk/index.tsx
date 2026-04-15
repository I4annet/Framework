import Link from "next/link";
import styles from "../../pages/produk/produk.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};
const TampilanProduct = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Daftar Product</h1>

      {products.length > 0 ? (
        <div className={styles.product__content}>
          {products.map((product: ProductType) => (
          <Link key={product.id} href={`/produk/${product.id}`} className={styles.product__content__item}>
            <div className={styles.product__content__item}>
              <div className={styles.product__content__item__image}>
                <img src={product.image} alt={product.name} width={200}  height={200}/>
              </div>
              <h2 className={styles.product__content__item__name}>
                {product.name}
              </h2>
              <p className={styles.product__content__item__category}>
                Kategori: {product.category}
              </p>
              <p className={styles.product__content__item__price}>
                Rp {product.price.toLocaleString()}
              </p>
            </div>
          </Link>
          ))}
        </div>
      ) : (
        <div className={styles.product__content__skeleton}>
          <div className={styles.product__content__skeleton__image}></div>
          <div className={styles.product__content__skeleton__name}></div>
          <div className={styles.product__content__skeleton__category}></div>
          <div className={styles.product__content__skeleton__price}></div>
        </div>
      )}
    </div>
  );
};

export default TampilanProduct;
