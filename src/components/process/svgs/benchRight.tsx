import * as motion from "motion/react-client";
export interface Props {
  transition: {
    duration: number;
  };
  opacity: number;
  activeSection: number;
}

const BenchRight = ({ transition, opacity, activeSection }: Props) => {
  const animate = activeSection === 3 ? 1 : 0.0;
  return (
    <g>
      {/*  ---------------------------------------------------------------------- */}
      {/*  Bench Right */}
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M393.846 338.686L353.145 315.051L418.5 277.999L458.976 301.749L393.846 338.686Z"
        stroke="var(--color-accent)"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M392.891 338.735L459.038 301.707V307.78L398.979 341.237V403.068L392.891 406.463V338.735Z"
        fill="#181818"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M393.345 338.784L353.682 315.57V383.201L393.345 405.5V338.784Z"
        fill="#181818"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M353.5 314.999L353.501 382.728M393.501 338.216V405.999M458.501 302.301V306.444M456.26 301.293L458.736 302.707M398.501 340.598L398.501 402.999M393.726 405.523L398.776 402.608M393.71 405.502L353.448 382.34M398.243 341.022L458.72 306.05M373.5 310.999C378 308.165 387.9 302.199 391.5 300.999C395.1 299.799 398.001 299.999 400 300.999L405.5 304.499C409.1 306.899 407 309.165 405.5 309.999C401.5 312.499 392.5 318.099 388.5 320.499C383 322.499 380 319.999 378.5 319.499C377.3 319.099 374.667 317.332 373.5 316.499C371.5 315.07 368.7 313.93 373.5 310.999ZM353.145 315.051L393.846 338.686L458.976 301.749L418.5 277.999L353.145 315.051ZM459.038 301.707L392.891 338.735V406.463L398.979 403.068V341.237L459.038 307.78V301.707ZM353.682 315.57L393.345 338.784V405.5L353.682 383.201V315.57Z"
        stroke="white"
      />
    </g>
  );
};

export default BenchRight;
