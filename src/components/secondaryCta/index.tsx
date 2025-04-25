import type { ButtonProps } from "./types";
import styles from "./styles.module.scss";
import { IconChevronRight } from "@tabler/icons-react";

const SecondaryCta = ({ label, onClick, icon }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button ${styles.button}`}>
      {label}
      {icon && <IconChevronRight size={20} />}
    </button>
  );
};

export default SecondaryCta;
