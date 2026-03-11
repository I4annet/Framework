import Link from "next/link";
import styles from "./register.module.css";

const TampilanRegister = () => {
    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Register</h1>

                    <form>
                        <div className={styles.inputGroup}>
                            <label>Username</label>
                            <input type="text" placeholder="Masukkan username" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Email</label>
                            <input type="email" placeholder="Masukkan email" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Password</label>
                            <input type="password" placeholder="Masukkan password" />
                        </div>

                        <button type="submit" className={styles.button}>
                            Register
                        </button>
                    </form>

                    <div className={styles.link}>
                        <Link href="/auth/login">
                            Sudah punya akun? Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TampilanRegister;