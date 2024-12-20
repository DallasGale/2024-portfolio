import type { ButtonProps } from "./types";
import styles from "./styles.module.scss";

const PrimaryCta = ({ label, onClick }: ButtonProps) => {
  return <button className={styles.button}>{label}</button>;
};

export default PrimaryCta;
