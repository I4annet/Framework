import { useRouter } from "next/router";
import Link from "next/link";
// import styles from "./login.module.css";
import styles from "./login.module.scss";

const TampilanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        push("/produk");
    }
    return (
        <div className={styles.login}>
            <h1>Halaman Login</h1>
            {/* <button onClick={handlerLogin}>Login</button> <br />
            <button onClick={() => push('/produk')}>Login</button> <br /> */}
            <button onClick={() => handlerLogin()}>Login</button>
            <h1 style={{ color: "red",border: "1px solid red",borderRadius: "5px",padding: "5px",}}>Belum Punya Akun</h1>
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>

        // <div>
        //     <h1>Halaman Login</h1>
        //     <Link href="/auth/register">Ke Halaman Register</Link>
        // </div>
    );
};

export default TampilanLogin;