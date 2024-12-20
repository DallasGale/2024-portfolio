import * as motion from "motion/react-client";
import styles from "./styles.module.scss";
export interface Props {
  transition: {
    duration: number;
  };
  opacity: number;
  activeSection: number;
}
const HouseDrawing = ({ transition, opacity, activeSection }: Props) => {
  const animate = activeSection === 1 ? 1 : 0.0;

  return (
    <>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        transition={transition}
        d="M153.052 408.931L273.88 478.691L394.614 409.014L273.785 339.253L153.052 408.931Z"
        stroke="var(--color-primary-text)"
        stroke-width="2"
        opacity={opacity}
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        transition={transition}
        d="M154.168 442.13L154.146 340.355L331.3 339.904L154.168 442.13Z"
        stroke="var(--color-primary-text)"
        stroke-width="2"
        opacity={opacity}
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        transition={transition}
        d="M277.69 426.147L321.305 451.327L347.188 436.39L303.573 411.209L277.69 426.147Z"
        stroke="var(--color-primary-text)"
        stroke-width="2"
        opacity={opacity}
      />
    </>
  );
};

export default HouseDrawing;
