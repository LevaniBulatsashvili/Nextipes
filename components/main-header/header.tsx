import styles from "./header.module.css";
import Link from "next/link";

const ISLOGGEDIN = false;

export default function Header() {
  return (
    <header id={styles["main-header"]}>
      <div id={styles.logo}>
        <Link href="/">Nextipe</Link>
      </div>
      <nav>
        <ul>
          {ISLOGGEDIN && (
            <li>
              <Link href="/">My Recipes</Link>
            </li>
          )}
          <li>
            <Link href={ISLOGGEDIN ? "/logout" : "/login"}>
              {ISLOGGEDIN ? "Login" : "Logout"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
