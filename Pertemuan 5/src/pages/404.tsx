import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta
          name="description"
          content="Halaman yang Anda cari tidak ditemukan."
        />
      </Head>

      <div className={styles.error}>
        <img
          src="/page-not-found.png"
          alt="Halaman tidak ditemukan"
          className={styles.error_image}
        />

        <h1>404</h1>
        <h2>Halaman Tidak Ditemukan</h2>
        <p>
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>

        <Link href="/" className={styles.button}>
          Kembali ke Home
        </Link>
      </div>
    </>
  );
};

export default Custom404;