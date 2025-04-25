import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Menu from "@components/menu";

type ToggleTypes = "on" | "active" | "off" | "waiting";
type MoodTypes = "Nostalgic" | "Lo-fi" | "Shoegaze" | "Psych" | "Punk" | "Goth";

type MoodProps = {
  label: MoodTypes;
  primaryColor: string;
};

const moods: MoodProps[] = [
  {
    label: "Nostalgic",
    primaryColor: "#FF6347",
  },
  {
    label: "Lo-fi",
    primaryColor: "#FF6347",
  },
  {
    label: "Shoegaze",
    primaryColor: "#FF4500",
  },
  {
    label: "Psych",
    primaryColor: "#FFD700",
  },
  {
    label: "Punk",
    primaryColor: "#FF6347",
  },
  {
    label: "Goth",
    primaryColor: "#000",
  },
];
const Mood = () => {
  type ThemeProps = {
    color: string;
    label: string;
  };
  const [currentTheme, setCurrentTheme] = useState("2");
  const [rotation, setRotation] = useState({ x: -22.5, y: 38 });

  const themes = [
    { label: "1", color: "#a620aa" },
    { label: "2", color: "#e7a42f" },
    { label: "3", color: "#aefc79" },
    { label: "4", color: "#e43737" },
    { label: "5", color: "#5c9dbd" },
    { label: "6", color: "#000000" },
  ];

  const cubeStyle = {
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
  };

  const [isOn, setIsOn] = useState(true);
  const toggleSwitch = () => setIsOn(!isOn);

  const handleFaceClick = (theme: ThemeProps) => {
    setCurrentTheme(theme.label);
  };

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

  const [currentMood, setCurrentMood] = useState<MoodProps | null>(null);
  const [toggleState, setToggleState] = useState<ToggleTypes>("off");
  const [displayOptons, setDisplayOptions] = useState(false);
  const classes = classNames([styles.toggle], {
    [styles.active]: toggleState === "active",
    [styles.off]: toggleState === "off",
    [styles.on]: toggleState === "on",
  });

  console.log({ currentMood });

  return (
    <div className={styles.moodContainer}>
      {displayOptons && (
        <Menu
          modifier={styles.moodMenu}
          items={themes}
          onClick={(e) => [
            setToggleState("off"),
            setCurrentMood({ label: e.label, primaryColor: e.primaryColor }),
            setCurrentTheme(e.label),
          ]}
        />
      )}
      <button
        style={{ backgroundColor: currentMood?.primaryColor }}
        className={styles.moodToggler}
        onClick={() => [
          setToggleState("active"),
          setDisplayOptions(!displayOptons),
        ]}
      >
        <div className={classes}></div>
        <span className={styles[toggleState]}>
          {currentMood?.label ? currentMood.label : "mood"}
        </span>
      </button>
    </div>
  );
};

export default Mood;
