export const menuVariants = {
  initial: {
    opacity: 0,
    // scale: 0.8,
    x: 20,
    transformOrigin: "top right",
  },
  animate: {
    opacity: 1,
    // scale: 1,
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
    // scale: 0.8,
    x: 20,
    transformOrigin: "top right",
    transition: {
      duration: 0.1,
    },
  },
};
export const listItemVariants = {
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
