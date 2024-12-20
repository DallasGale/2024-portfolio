import styles from "./styles.module.scss";

interface InputProps {
  label: string;
  placeholder?: string;
}
const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input
        name="name"
        className={styles.input}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
