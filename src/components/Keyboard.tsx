import keys from "../data/keys.json";
import styles from "../keyboard.module.css"

const Keyboard = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {keys.map((key) => (
        <button className={`${styles.btn}`} key={key}>{key}</button>
      ))}
    </div>
  );
};

export default Keyboard;
