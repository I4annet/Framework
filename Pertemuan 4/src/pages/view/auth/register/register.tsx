import Link from "next/link";
import styles from "./register.module.css";

const TampilanRegister = () => {
    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <h1>Register</h1>
                <input 
                    type="text" 
                    placeholder="Username" 
                    className={styles.input}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className={styles.input}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className={styles.input}
                />
                <button className={styles.button}>
                    Register
                </button>
                <p>
                    <Link href="/auth/login">Ke Halaman Login</Link>
                </p>
            </div>
        </div>
    );
}

export default TampilanRegister;