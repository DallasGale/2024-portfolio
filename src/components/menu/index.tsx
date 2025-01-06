import * as motion from "motion/react-client";
import { useRef } from "react";
import { listItemVariants, menuVariants } from "./variants";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface MenuProps {
  items: any[];
  onClick: (e: any) => void;
  modifier?: string;
}
const Menu = ({ items, onClick, modifier }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const classes = classNames([styles.container], {
    [`${modifier}`]: modifier,
  });
  return (
    <motion.div
      key="menu"
      ref={menuRef}
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={classes}
    >
      <motion.ul className={styles.list}>
        {items.map((item, index) => (
          <motion.li
            key={item}
            className={styles.item}
            variants={listItemVariants}
            custom={index}
          >
            <button onClick={() => onClick(item)} className={styles.button}>
              {item.label}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
export default Menu;
