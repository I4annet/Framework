import Link from "next/link";
import styles from "./about.module.scss";

const TampilanAbout = () => {
    return (
        <div className={styles.about}>
            <h1 className={styles.about__title}>Halaman About</h1>
            <p className={styles.about__description}>
                Ini adalah halaman about yang berisi informasi tentang aplikasi ini.
            </p>
            <Link href="/">Kembali ke Halaman Home</Link>
        </div>
    );
}

export default TampilanAbout;