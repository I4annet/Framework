import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data } = useSession();
  return (
    <nav className={styles.navbar}>
      <div className="big">
        <h1>Navbar</h1>
      </div>
      {data ? (
      <button onClick={() => signOut()}>Sign Out</button>
        ) : (
      <button onClick={() => signIn()}>Sign In</button>
        )}
    </nav>
    );
};

export default Navbar;