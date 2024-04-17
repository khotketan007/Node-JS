import styles from "./Display.module.css";
const Display = () => {
  return (
    <>
      <input
        type="text"
        className={styles.display}
        placeholder="Output"
      ></input>
    </>
  );
};
export default Display;
