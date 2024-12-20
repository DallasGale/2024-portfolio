import * as motion from "motion/react-client";
export interface Props {
  transition: {
    duration: number;
  };
  opacity: number;
  activeSection: number;
}

const Seats = ({ transition, opacity, activeSection }: Props) => {
  const animate = activeSection === 3 ? 1 : 0.0;

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
      animate={activeSection === 3 ? "animate" : "exit"}
    >
      {/*  Seat Top Right  */}
      <motion.ellipse
        cx="465.539"
        cy="324.337"
        rx="15.8218"
        ry="8.63647"
        fill="var(--color-accent)"
        variants={ellipseVariants}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M444.51 376.902L452.51 336.902M486.51 377.1L478.2 336.757M465.5 391V341.296M450.029 325.022L450 333.558C456.5 342.058 473 344.5 480.5 334V326.521M465.826 366.701L481.724 357.522M449.25 357.567L465.148 366.746M465.157 347.725L482.241 357.588M448.67 357.61L465.83 347.703M450.155 330.027C456.655 338.527 473 341 480.5 330.5M481 324.5C481 329.194 474.06 333 465.5 333C456.94 333 450 329.194 450 324.5C450 319.806 456.94 316 465.5 316C474.06 316 481 319.806 481 324.5Z"
        stroke="white"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
      {/*  ---------------------------------------------------------------------- */}
      {/*  Seat Top Left  */}
      <motion.ellipse
        cx="425.539"
        cy="348.337"
        rx="15.8218"
        ry="8.63647"
        fill="var(--color-accent)"
        variants={ellipseVariants}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M404.51 400.902L412.656 360.296M446.51 401.1L438.106 360.697M425.5 415V365.138M410.5 349L410.5 358C417 366.5 433 368.5 440.5 358V349M425.826 390.701L441.724 381.522M409.25 381.567L425.148 390.746M425.157 371.725L442.241 381.588M408.67 381.61L425.83 371.703M410.5 354.5C417 363 433 365 440.5 354.5M441 348.5C441 353.194 434.06 357 425.5 357C416.94 357 410 353.194 410 348.5C410 343.806 416.94 340 425.5 340C434.06 340 441 343.806 441 348.5Z"
        stroke="white"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
    </motion.g>
  );
};

export default Seats;
