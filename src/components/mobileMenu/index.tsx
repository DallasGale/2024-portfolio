import { listItemVariants, menuVariants } from "@components/menu/variants";
import styles from "./styles.module.scss";
import menuStyles from "../menu/styles.module.scss";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import Menu from "@components/menu";

const MobileMenu = () => {
  return <Icon />;
};
export default MobileMenu;

const items = [
  { label: "Projects", url: "/projects" },
  { label: "Services", url: "/services" },
  { label: "Process", url: "/process" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
  { label: "Github", url: "" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/andrew-j-lee/" },
];

const Icon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both menu and button
      if (
        isVisible &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

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
          />
          <path
            d="M1.3335 17.333H34.6668"
            stroke="var(--color-hamburger)"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </motion.button>
      <AnimatePresence mode="wait">
        {isVisible ? (
          <Menu
            modifier={styles.mobileMenu}
            items={items}
            onClick={() => (window.location.href = "/")}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};
