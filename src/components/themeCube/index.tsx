import { useState } from "react";
import styles from "./styles.module.css";

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
    { name: "2", color: "#545454", rotateX: 90, rotateY: 0 },
    { name: "3", color: "#171717", rotateX: 0, rotateY: -90 },
    { name: "4", color: "#fff", rotateX: 0, rotateY: 90 },
    { name: "5", color: "#000", rotateX: -90, rotateY: 0 },
    { name: "6", color: "#e67e22", rotateX: 180, rotateY: 0 },
  ];

  const cubeStyle = {
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
  };

  const faceStyle = (theme: ThemeProps) => ({
    backgroundColor: currentTheme === theme.name ? theme.color : "#000",
    // border: `1px solid #000`,
    transform: `rotateX(${theme.rotateX}deg) rotateY(${theme.rotateY}deg) translateZ(25px)`,
    opacity: currentTheme === theme.name ? 1 : 0.7,
  });

  const handleFaceClick = (theme: ThemeProps) => {
    setCurrentTheme(theme.name);
    const newRotation = {
      x: -theme.rotateX - 22.5,
      y: -theme.rotateY + 25,
    };
    setRotation(newRotation);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.cube} style={cubeStyle}>
        {themes.map((theme) => (
          <div
            onMouseEnter={() => setCurrentTheme(theme.name)}
            className={styles.face}
            key={theme.name}
            style={faceStyle(theme)}
            onClick={() => handleFaceClick(theme)}
          >
            <span style={{ pointerEvents: "none" }}>{theme.name}</span>
          </div>
        ))}
      </div>
      {/* <p>Current Theme: {currentTheme}</p> */}
    </div>
  );
};

export default ThemeCube;
