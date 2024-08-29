import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Switch } from "antd";
import classnames from "classnames";
import { motion } from "framer-motion";

type ThemeProps = {
  color: string;
  name: string;
  rotateX: number;
  rotateY: number;
};
const ThemeCube = () => {
  const [currentTheme, setCurrentTheme] = useState("1");
  const [rotation, setRotation] = useState({ x: -22.5, y: 38 });

  const themes = [
    { name: "1", color: "#aefc79", rotateX: 0, rotateY: 0 },
    { name: "2", color: "#e7a42f", rotateX: 90, rotateY: 0 },
    { name: "3", color: "#a620aa", rotateX: 0, rotateY: -90 },
    { name: "4", color: "#e43737", rotateX: 0, rotateY: 90 },
    { name: "5", color: "#5c9dbd", rotateX: -90, rotateY: 0 },
    { name: "6", color: "#000000", rotateX: 180, rotateY: 0 },
  ];

  const cubeStyle = {
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
  };

  const [isOn, setIsOn] = useState(true);
  const toggleSwitch = () => setIsOn(!isOn);

  const faceStyle = (theme: ThemeProps) => ({
    // opacity: isOn ? 1 : 0,
    // border: `1px solid #000`,
    transform: `rotateX(${theme.rotateX}deg) rotateY(${theme.rotateY}deg) translateZ(50px)`,
    // opacity: currentTheme === theme.name ? 1 : 0.7,
    color: currentTheme === theme.name ? theme.color : "rgba(144,144,144,0.2)",
    borderColor:
      currentTheme === theme.name ? theme.color : "rgba(144,144,144,0.2)",
  });

  const handleFaceClick = (theme: ThemeProps) => {
    setCurrentTheme(theme.name);
    const newRotation = {
      x: -theme.rotateX - 22.5,
      y: -theme.rotateY + 25,
    };
    setRotation(newRotation);
  };

  const [checked, setChecked] = useState(false);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const containerClasses = classnames(styles.container, {
    [styles.drop]: isOn,
  });

  useEffect(() => {
    // Update the meta tag when the theme changes
    const metaTag = document.querySelector('meta[name="color-scheme"]');
    if (metaTag) {
      metaTag.setAttribute("content", currentTheme);
    } else {
      const newMetaTag = document.createElement("meta");
      newMetaTag.name = "color-scheme";
      newMetaTag.content = currentTheme;
      document.head.appendChild(newMetaTag);
    }

    // Set the data-theme attribute on the body
    document.body.setAttribute("data-theme", currentTheme);

    // Update CSS custom property
    document.documentElement.style.setProperty("--theme", currentTheme);
  }, [currentTheme]);

  return (
    <motion.div className={containerClasses}>
      <div className={styles.switch} data-ison={isOn} onClick={toggleSwitch}>
        <motion.div
          className={styles.handle}
          layout
          transition={spring}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.95 }}
        />
      </div>
      <motion.div
        initial={{ top: 0, y: -220 }}
        animate={isOn ? { y: 300 } : { y: -220 }}
        transition={{
          type: "spring",
          stiffness: isOn ? 400 : 150,
          damping: isOn ? 20 : 22,
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.cube} style={cubeStyle}>
            {themes.map((theme) => (
              <div
                className={styles.face}
                key={theme.name}
                style={faceStyle(theme)}
                onClick={() => handleFaceClick(theme)}
              >
                <span style={{ pointerEvents: "none" }}>{theme.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 300, y: 450 }}
        animate={isOn ? { x: 0 } : { x: 300 }}
        transition={{
          type: "spring",
          stiffness: isOn ? 200 : 150,
          damping: isOn ? 30 : 22,
        }}
        className={styles.instruction}
      >
        Click a side!
      </motion.div>
    </motion.div>
  );
};

export default ThemeCube;
