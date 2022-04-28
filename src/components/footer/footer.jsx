import classNames from "classnames";
import styles from "./footer.module.css";
import bgimg from "./footerGorup.svg";

export default function Footer() {
  return (
    <section styles={{ marginTop: "174px" }}>
      <div className={classNames("container", styles.container)}>
        <div className={styles.connect}>
          <img src={bgimg} className={styles.bgImg} alt="bgimg" />
          <h1 className={classNames("otherHeaders", styles.header)}>
            Get connect with Quo <br /> and enjoy a new Experience
          </h1>
          <div className={styles.inputWrap}>
            <input type="text" placeholder="Enter your mail here" />
            <a href="/">Send Us</a>
          </div>
        </div>
        <div className={styles.copyright}></div>
      </div>
    </section>
  );
}
