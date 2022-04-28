import styles from "./satisfaction.module.css";
import nigro from "./zorNiger.svg";
import classNames from "classnames";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Satisfaction() {
  return (
    <div className={classNames("container", styles.container)}>
      <img src={nigro} alt="woman" />
      <div className={styles.info}>
        <h1 className="otherHeaders">Satisfied peoples saying about Quo!</h1>
        <p className="paragraph">
          Quo is the most easier way for transaction with your friends and
          family, <br /> No matter where are you. An exceptional way for make
          your life one step easier. <br /> Quo is the most easier way for
          transaction with your friends and family,
        </p>
        <h5>Amanda Smith</h5>
        <p className={styles.ceo}>CEO, Amazon</p>
        <div className={styles.icons}>
          <BsArrowLeftCircleFill className={styles.iconleft} />
          <BsFillArrowRightCircleFill className={styles.iconRight} />
        </div>
      </div>
    </div>
  );
}
