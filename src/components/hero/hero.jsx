import styles from "./hero.module.css";
import play from "../../components/tablets/play.svg";
import classNames from "classnames";

export default function Hero() {
  return (
    <div className="container">
      <div className={styles.hero}>
        <div className={styles.titleWrap}>
          <h1>Experience the easier way for transaction</h1>
        </div>
        <div className={styles.infoWrap}>
          <p>
            Quo is the most easier way for transaction with your friends and
            family, now matter where are you. An exceptional way for make your
            life one step easier
          </p>
        </div>
        <div className={styles.btnCover}>
          <img src={play} alt="iconPlay" className={styles.iconPlay} />
          <a href="/">See how we works</a>
        </div>
      </div>
    </div>
  );
}
