import styles from "./currancy.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import classNames from "classnames";
import aee from "../tablets/aee.svg";
import america from "../tablets/america.svg";
import britan from "../tablets/britan.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import hi from "../tablets/hi.svg";
import frontCard from "./frontcard.svg";

export default function Currency() {
  return (
    <div className="container">
      <div className={styles.info}>
        <div className={styles.infoText}>
          <div className={styles.titleWrap}>
            <h1 className={styles.otherHeaders}>
              {" "}
              Real time currency check and easier tracking system
            </h1>
          </div>
          <div className={styles.subtItleWrap}>
            <p className="paragraph">
              Quo is the most easier way for transaction with your friends and
              family, <br /> No matter where are you. An exceptional way for
              make your life one step easier. <br /> Quo is the most easier way
              for transaction with your friends and family,
            </p>
            <div className={classNames("btnWhite", styles.btn)}>
              <a href="/">Explore Now</a>
              <HiOutlineArrowNarrowRight className="iconArrow" size={24} />
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.backCard}>
            <div className={styles.backgroundView}>
              <img src={aee} alt="rock" className={styles.aeeHand} />
            </div>
            <div className={styles.frontalView}>
              <img src={frontCard} alt="" />
              <img src={hi} alt="hi" className={styles.hiIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
