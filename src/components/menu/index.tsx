import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { listItemVariants, menuVariants } from "./variants";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface MenuProps {
  items: any[];
  onClick?: (e: any) => void;
  modifier?: string;
}
const Menu = ({ items, onClick, modifier }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  // function handleOnClick(id: number) {
  //   setTimeout(() => {
  //     console.log({ activeId });
  //     if (id === activeId) setIsActive(true);
  //   }, 2000);
  // }

  const classes = classNames([styles.container], {
    [`${modifier}`]: modifier,
  });

  // const linkClasses = classNames([styles.button], {
  //   [`${styles.active}`]: isActive,
  // });

  console.log({ activeId });
  return (
    <motion.div
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
            key={item.label}
            className={styles.item}
            variants={listItemVariants}
            custom={index}
          >
            <a
              href={item.url}
              className={`${styles.button} ${item.id === activeId ? styles.active : null}`}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </a>
            {onClick && (
              <button onClick={() => onClick(item)} className={styles.button}>
                {item.label}
              </button>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
export default Menu;
