import styles from "./woman.module.css";
import woman from "./hero-image.png";
import brands from "../tablets/group-brands.svg";
import classNames from "classnames";

export default function Woman() {
  return (
    <div className={classNames("container", styles.container)}>
      <img src={woman} alt="woman" className={styles.heroImg} />
      <div className={styles.trustedBy}>
        <div
          style={{
            maxWidth: "214px"
          }}
        >
          <h1>Trusted By</h1>
        </div>
        <div className={styles.brands}>
          <img src={brands} alt="brands" />
        </div>
      </div>
    </div>
  );
}
