import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { push } = useRouter();
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setError("");
        setIsLoading(true);
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const fullname = formData.get("fullname") as string;
        const password = formData.get("password") as string;
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                { email, fullname, password })
        });
        if (response.status === 200) {
            form.reset();
            setIsLoading(false);
            push("/auth/login");
        } else {
            setIsLoading(false);
            setError(
                response.status === 400 ? "Email already exists" : "An error occurred",
            );
        }
    };
    return (
        <div className={styles.register}>
            {error && <p className={styles.register_error}>{error}</p>} {/* Tampilkan pesan error jika ada */}
            <h1 className={styles.register_title}>Halaman Register</h1>
            <div className={styles.register_form}>
                <form onSubmit={handleSubmit}> {/* Tambahkan ini untuk menangani submit form */}
                    <div className={styles.register_form_item}>
                        <label htmlFor="email"  className={styles.register_form_item_label}>
                            Email
                        </label>
                        <input type="email" id="email" name="email" placeholder="Email" className={styles.register_form_item_input} />
                    </div>
                    <div className={styles.register_form_item}>
                        <label htmlFor="fullname" className={styles.register_form_item_label}>
                            Full Name
                        </label>
                        <input type="text" id="fullname" name="fullname" placeholder="Full Name" className={styles.register_form_item_input} />
                    </div>
                    <div className={styles.register_form_item}>
                        <label htmlFor="password" className={styles.register_form_item_label}>
                            Password
                        </label>
                        <input type="password" id="password" name="password" placeholder="Password" className={styles.register_form_item_input} />
                    </div>
                    <button type="submit" className={styles.register_form_item_button} disabled={isLoading}> {/* Tampilkan "Loading..." saat proses registrasi sedang berlangsung, dan "Register" saat tidak. */}
                        {isLoading ? "Loading..." : "Register"}
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
