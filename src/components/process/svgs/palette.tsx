import * as motion from "motion/react-client";
// import styles from "./styles.module.scss";
export interface PaletteProps {
  activeSection: number;
}
const Palette = ({ activeSection }: PaletteProps) => {
  const ellipseVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
  };

  // Parent container variants for stagger effect
  const containerVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <motion.g
      variants={containerVariants}
      initial="initial"
      animate={activeSection === 1 ? "animate" : "exit"}
    >
      <motion.ellipse
        cx="363.257"
        cy="302.868"
        rx="15.8218"
        ry="8.63647"
        fill="rgb(242, 54, 54)"
        variants={ellipseVariants}
        transition={{ duration: 0.5 }}
      />
      <motion.ellipse
        cx="392.831"
        cy="320.141"
        rx="15.8218"
        ry="8.63647"
        fill="rgb(75, 209, 213)"
        variants={ellipseVariants}
        transition={{ duration: 0.5 }}
      />
      <motion.ellipse
        cx="422.334"
        cy="337.326"
        rx="15.8218"
        ry="8.63647"
        fill="rgb(113, 217, 92)"
        variants={ellipseVariants}
        transition={{ duration: 0.5 }}
      />

      <motion.ellipse
        cx="452.978"
        cy="353.599"
        rx="15.8218"
        ry="8.63647"
        fill="rgb(222, 226, 115)"
        variants={ellipseVariants}
        transition={{ duration: 0.5 }}
      />
    </motion.g>
  );
};

export default Palette;
