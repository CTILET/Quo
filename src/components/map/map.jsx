import map from "./map.svg";
import styles from "./map.module.css";

export default function Map() {
  return (
    <section className={styles.section}>
      <h1 className="otherHeaders" style={{ color: "white" }}>
        Widely covering these countries
      </h1>
      <p className="paragraph">
        Quo is the most easier way for transaction with your friends and family,
        No matter where are you. An exceptional way for make your life one step
        easier.Quo is the most easier way for transaction with your friends and
        family,
      </p>
      <img src={map} alt="" className="map" />
    </section>
  );
}
