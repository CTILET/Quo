import styles from "./stayupdate.module.css";
import balance from "./balance.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import classNames from "classnames";

export default function StayUpdate() {
  return (
    <section className={styles.sectionContainer}>
      <img src={balance} alt="" />
      <div className="container">
        <div className={styles.info}>
          <h1 className="otherHeaders">
            Stay updated with your daily reports and news
          </h1>
          <p className="paragraph">
            Quo is the most easier way for transaction with your friends and
            family, <br /> No matter where are you. An exceptional way for make
            your life one step easier. <br /> Quo is the most easier way for
            transaction with your friends and family,
          </p>
          <div className={classNames("btnWhite", styles.btn)}>
            <a href="/">Learn How</a>
            <HiOutlineArrowNarrowRight className="iconArrow" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
