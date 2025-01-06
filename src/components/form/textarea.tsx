import styles from "./styles.module.scss";
import type { InputTypes } from "./types";

const Textarea = ({ label, placeholder, value, setValue }: InputTypes) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="name"
        className={`${styles.input} ${styles.textarea}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
