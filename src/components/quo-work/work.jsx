import styles from "./work.module.css";
import create from "./Create.svg";
import enter from "./enter.svg";
import send from "./send.svg";

export default function Work() {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h1 className="otherHeaders">How Quo works?</h1>
        <p className="paragraph">
          Quo is the most easier way for transaction with your friends and
          family, <br /> No matter where are you. An exceptional way for make
          your life one step easier
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={create} alt="" />
          <h5 className="otherHeaders"> Create accont</h5>
          <p>
            Create free account for your transaction. <br /> It’s pretty much
            easier and don’t worry we care <br /> about your safety
          </p>
        </div>
        <div className={styles.card}>
          <img src={enter} alt="" />
          <h5 className="otherHeaders"> Enter Recipent Info</h5>
          <p>
            Create free account for your transaction. <br /> It’s pretty much
            easier and don’t worry we care <br /> about your safety
          </p>
        </div>
        <div className={styles.card}>
          <img src={send} alt="" />
          <h5 className="otherHeaders"> Send money</h5>
          <p>
            Create free account for your transaction. <br /> It’s pretty much
            easier and don’t worry we care <br /> about your safety
          </p>
        </div>
      </div>
    </section>
  );
}
