import styles from "./navbar.module.css";
import Script from "next/dist/client/script";
import { signIn, signOut, useSession } from "next-auth/react";


const Navbar = () => {
  const {data}:any = useSession();
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand} id="title"></div>
      <Script id="title-script" strategy='lazyOnload'>
        {`document.getElementById('title').innerHTML = 'My App';`}
      </Script>

      <div className={styles.navbar_right}>
        {data ? (
          <>
          <div className={styles.navbar_user}>
            Welcome, {data.user?.fullname}
            {data.user.image && (
              <img 
              src={data.user.image}
              alt={data.user.fullname}
              className={styles.navbar_user_image}
              />
            )}
          </div>
            <button className={`${styles.navbar_button} ${styles["navbar_button--danger"]}`} 
            onClick={() => signOut()}>
              Sign Out
            </button>
            </>
        ) : (
          <button className={`${styles.navbar_button} ${styles["navbar_button--primary"]}`} 
          onClick={() => signIn()}>
            Sign In
          </button>

        )}
      </div>
    </div>
  );
};

export default Navbar;