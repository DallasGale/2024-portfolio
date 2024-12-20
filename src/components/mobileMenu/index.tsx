import styles from "./styles.module.scss";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

const MobileMenu = () => {
  return <Icon />;
};
export default MobileMenu;

const Icon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both menu and button
      if (
        isVisible &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  console.log({ isVisible });
  const menuVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      x: 20,
      transformOrigin: "top right",
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transformOrigin: "top right",
      transition: {
        // duration: 0.2,
        type: "spring",
        stiffness: 80,
        damping: 8,
        mass: 0.7,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: 20,
      transformOrigin: "top right",
      transition: {
        duration: 0.1,
      },
    },
  };
  const listItemVariants = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
    },
  };
  return (
    <div className={styles.container}>
      <motion.button
        key="button"
        ref={buttonRef}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.6 }}
        className={styles.button}
        onClick={() => setIsVisible(!isVisible)}
      >
        <svg
          width="36"
          height="18"
          viewBox="0 0 36 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.3335 0.666992H34.6668"
            stroke="var(--color-hamburger)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1.3335 17.333H34.6668"
            stroke="var(--color-hamburger)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </motion.button>
      <AnimatePresence mode="wait">
        {isVisible ? (
          <motion.div
            key="menu"
            ref={menuRef}
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.menu}
          >
            <motion.ul className={styles.list}>
              {[
                "Projects",
                "Services",
                "Process",
                "About",
                "Contact",
                "Github",
                "LinkedIn",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  className={styles.item}
                  variants={listItemVariants}
                  custom={index}
                >
                  <a className={styles.link} href="">
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
