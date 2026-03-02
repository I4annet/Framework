import { useRouter } from "next/router";
import Link from "next/link";

const halamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        push("/produk");
    }
    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handlerLogin}>Login</button> <br />
            <button onClick={() => push('/produk')}>Login</button> <br />
            <button onClick={() => handlerLogin()}>Login</button>
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>

        // <div>
        //     <h1>Halaman Login</h1>
        //     <Link href="/auth/register">Ke Halaman Register</Link>
        // </div>
    );
};

export default halamanLogin;