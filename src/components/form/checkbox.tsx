import styles from "./styles.module.scss";
const Checkbox = () => {
  return (
    <label className={styles.checkboxWrapper}>
      <input
        className={styles.checkboxInput}
        type="checkbox"
        name="services"
        value="development"
      />
      <span className={styles.label}>Development</span>
    </label>
  );
};

export default Checkbox;
