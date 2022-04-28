import styles from "./header.module.css";
import logo from "../../../public/logo.svg";
import classNames from "classnames";

export default function Header() {
  return (
    <div className="container">
      <header className={styles.header}>
        <img src={logo} alt="Quo." className={styles.logo} />
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>
              Money Transfer
            </a>
            <a href="/" className={styles.navLink}>
              Multi Currency
            </a>
            <a href="/" className={styles.navLink}>
              How it works
            </a>
            <a href="/" className={styles.navLink}>
              Business
            </a>
            <a href="/" className={styles.navLink}>
              Help
            </a>
          </nav>
          <div className={styles.navBtns}>
            <a href="/" className={styles.navLink}>
              Log In
            </a>
            <a
              href="/"
              className={classNames(styles.navLink, "btn", styles.activeBtn)}
            >
              Sign up
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
