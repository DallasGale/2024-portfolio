import { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Mood = () => {
  const [toggle, setToggle] = useState(false);
  const classes = classNames(styles.toggle, {
    [styles.on]: toggle,
    [styles.off]: !toggle,
  });
  return (
    <div className={styles.moodContainer}>
      <button className={styles.moodToggler} onClick={() => setToggle(!toggle)}>
        <div className={classes}></div>
      </button>
    </div>
  );
};

export default Mood;
