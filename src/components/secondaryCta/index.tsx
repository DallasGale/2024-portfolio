import type { ButtonProps } from "./types";
import styles from "./styles.module.scss";

const SecondaryCta = ({ label, onClick }: ButtonProps) => {
  return <button className={styles.button}>{label}</button>;
};

export default SecondaryCta;
