import styles from "./styles.module.scss";
import type { InputTypes } from "./types";

const Input = ({ id, label, placeholder, value, setValue }: InputTypes) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={id}
        id={id}
        className={styles.input}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
