import Link from "next/link";
import styles from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react"; 

const TampilanLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { push, query } = useRouter();
    const callbackUrl: any = query.callbackUrl || "/";
    const [error, setError] = useState("");

    const handleSubmit = async (event: any) => {
        setError("");
        setIsLoading(true);
        event.preventDefault();
        // event.preventDefault();
        // const form = event.currentTarget;
        // const formData = new FormData(event.currentTarget);
        // const email = formData.get("email") as string;
        // const fullname = formData.get("fullname") as string;
        // const password = formData.get("password") as string;
        // const response = await fetch("/api/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(
        //         { email, fullname, password })
        // });
        // if (response.status === 200) {
        //     form.reset();
        //     setIsLoading(false);
        //     push("/auth/login");
        // } else {
        //     setIsLoading(false);
        //     setError(
        //         response.status === 400 ? "Email already exists" : "An error occurred",
        //     );
        // }
        try {
          const res = await signIn("credentials", {
            redirect: false,
            email: event.target.email.value,
            password: event.target.password.value,
            callbackUrl,
          });
          
          if (!res?.error) {
            setIsLoading(false);
            push(callbackUrl);
          } else {
            setIsLoading(false);
            setError("Login failed");
          }
        } catch (error) {
          setIsLoading(false);
          setError("wrong email or password");
        }
    };
    return (
        <div className={styles.login}>
            {error && <p className={styles.login_error}>{error}</p>} {/* Tampilkan pesan error jika ada */}
            <h1 className={styles.login_title}>Halaman login</h1>
            <div className={styles.login_form}>
                <form onSubmit={handleSubmit}> {/* Tambahkan ini untuk menangani submit form */}
                    <div className={styles.login_form_item}>
                        <label htmlFor="email"  className={styles.login_form_item_label}>
                            Email
                        </label>
                        <input type="email" id="email" name="email" placeholder="Email" className={styles.login_form_item_input} />
                    </div>
                    <div className={styles.login_form_item}>
                        <label htmlFor="password" className={styles.login_form_item_label}>
                            Password
                        </label>
                        <input type="password" id="password" name="password" placeholder="Password" className={styles.login_form_item_input} />
                    </div>
                    <button type="submit" className={styles.login_form_item_button} disabled={isLoading}> {/* Tampilkan "Loading..." saat proses registrasi sedang berlangsung, dan "login" saat tidak. */}
                        {isLoading ? "Loading..." : "login"}
                    </button>
                </form>
                <br />
                <p className={styles.login_form_item_text}>
                    Belum punya akun? <Link href="/auth/register">Daftar di sini</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanLogin;
