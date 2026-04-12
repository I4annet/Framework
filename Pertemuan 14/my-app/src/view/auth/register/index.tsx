import Link from "next/link";
import styles from "./register.module.scss";

const TampilanRegister = () => {
    return (
        <div className={styles.register}>
            <h1 className={styles.register_title}>Halaman Register</h1>
            <div className={styles.register_form}>
                <form action="">
                    <div className={styles.register_form_item}>
                        <label htmlFor="email"  className={styles.register_form_item_label}>
                            Email
                        </label>
                        <input type="email" id="email" placeholder="Email" className={styles.register_form_item_input} />
                    </div>
                    <div className={styles.register_form_item}>
                        <label htmlFor="Fullname" className={styles.register_form_item_label}>
                            Full Name
                        </label>
                        <input type="text" id="Fullname" placeholder="Full Name" className={styles.register_form_item_input} />
                    </div>
                    <div className={styles.register_form_item}>
                        <label htmlFor="password" className={styles.register_form_item_label}>
                            Password
                        </label>
                        <input type="password" id="password" placeholder="Password" className={styles.register_form_item_button} />
                    </div>
                    <button type="submit" className={styles.register_form_item_button}>
                        Register
                    </button>
                </form>
                <br />
                <p className={styles.register_form_item_text}>
                    Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanRegister;
