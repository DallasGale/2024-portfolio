import * as motion from "motion/react-client";
import HouseDrawing from "./houseDrawing";
import Palette from "./palette";
import Door from "./door";
import Cabinets from "./cabinets";
import Seats from "./seats";
import Tv from "./tv";
import BenchLeft from "./bench";
import BenchRight from "./benchRight";
const houseDrawingTransition = {
  duration: 1.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const tvTransition = {
  duration: 1.5,
  ease: "easeInOut",
  delay: 1,
};
const benchLeftTransition = {
  duration: 0.8,
  ease: "easeInOut",
  delay: 1,
};
const benchRightTransition = {
  duration: 0.8,
  ease: "easeInOut",
  delay: 1.8,
};
const seatTransition = {
  duration: 1.5,
  ease: "easeInOut",
  delay: 1,
};

const cabinetTransition = {
  duration: 4.5,
  yoyo: Infinity,
  ease: "easeInOut",
};
const perimeterTransition = {
  duration: 1.5,
  yoyo: Infinity,
  ease: "easeInOut",
};
const gridTransition = { duration: 3.5, ease: "easeInOut" };

interface Props {
  activeSection: number;
}
const Complete = ({ activeSection }: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
        delayChildren: 1.8, // Initial delay before starting animations
      },
    },
  };

  return (
    <motion.svg
      width="598"
      height="582"
      viewBox="0 0 598 582"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* 
      //-------------------  Design //-------------------
      */}
      {/*  ---------------------------------------------------------------------- */}
      {/*  Grid */}
      {/* {activeSection > 1 && ( */}
      <motion.path
        d="M506.616 439.174L217.714 273.014M477.116 456.674L188.083 290.431M417.714 491.87L127.901 324.547M447.754 473.803L158.689 306.912M357.454 526.323L68.0727 359.248M327.558 543.145L38.9273 376.504M386.988 509.396L97.9244 342.505M331.261 235.346L32.1309 408.679M390.811 269.671L90.5804 443.009M362.129 253.224L65.6123 424.418M450.393 304.682L151.232 477.403M421.469 287.812L122.307 460.533M538.308 354.905L240.659 526.752M569.218 374.379L271.253 546.409M508.55 339.649L210.318 511.833M478.795 322.054L182.042 493.384M565.276 403.331L275.895 236.257M535.38 420.153L246.75 253.512"
        stroke="#616161"
        stroke-dasharray="4 4"
        transition={gridTransition}
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
      />
      {/* )} */}

      {/*  ---------------------------------------------------------------------- */}
      {/* Palette */}
      <Palette activeSection={activeSection} />

      {/*  ---------------------------------------------------------------------- */}
      {/*  Top Perimeter */}
      <motion.path
        d="M597 388L296.5 562L7.5 394.5L304.5 219.5L597 388Z"
        stroke="white"
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        transition={perimeterTransition}
      />

      {/*  ---------------------------------------------------------------------- */}
      {/*  House Drawing */}
      <HouseDrawing
        opacity={activeSection === 1 ? 1 : 0}
        transition={houseDrawingTransition}
        activeSection={activeSection}
      />

      {/*  ---------------------------------------------------------------------- */}
      {/* Inside  */}
      {activeSection === 3 && (
        <>
          {/*  ---------------- ------------------------------------------------------ */}
          {/*  Kitchen Top Cabinets */}
          <Cabinets
            opacity={activeSection === 3 ? 1 : 0}
            transition={cabinetTransition}
            activeSection={activeSection}
          />

          {/*  ---------------------------------------------------------------------- */}

          <Seats
            opacity={activeSection === 3 ? 1 : 0}
            transition={seatTransition}
            activeSection={activeSection}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  TV */}

          <Tv
            opacity={activeSection === 3 ? 1 : 0}
            transition={tvTransition}
            activeSection={activeSection}
          />

          {/*  ---------------------------------------------------------------------- */}
          {/*  Bench Top Left */}
          <BenchLeft
            opacity={activeSection === 3 ? 1 : 0}
            transition={benchLeftTransition}
            activeSection={activeSection}
          />

          {/*  ---------------------------------------------------------------------- */}
          {/*  Bench Right */}
          <BenchRight
            opacity={activeSection === 3 ? 1 : 0}
            transition={benchRightTransition}
            activeSection={activeSection}
          />
        </>
      )}

      {/* 
      //-------------------  Development -------------------
      */}
      {activeSection !== 1 && (
        <>
          {" "}
          {/*  ---------------------------------------------------------------------- */}
          {/*  Facade Edge */}
          <motion.path
            d="M146.5 439.5L63 390.5V183L180.5 143.5L303 323V527.301C303 528.068 302.173 528.549 301.506 528.17L200 470.5V349.5L146.5 318V439.5Z"
            fill="var(--color-bg)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Left Vertical Edge */}
          <motion.line
            x1="296.617"
            y1="561.175"
            x2="296.617"
            y2="580.175"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Middle Vertical Edge */}
          <motion.line
            x1="7.02441"
            y1="394.486"
            x2="7.02442"
            y2="413.486"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Right Vertical Edge */}
          <motion.path
            d="M597.5 387.966L597.5 407"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Bottom Right Perimeter */}
          <motion.path
            d="M297.254 580.99L597.598 407"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  Bottom Left Perimeter */}
          <motion.path
            d="M6.79577 413.019L297.38 580.759"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Edge line top right */}
          {/*  ---------------------------------------------------------------------- */}
          <motion.line
            x1="305.311"
            y1="43.5385"
            x2="63.1883"
            y2="183.328"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Wall Edge Left */}
          <motion.line
            x1="305.417"
            y1="55.7226"
            x2="74.1432"
            y2="189.249"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          <motion.line
            x1="63.25"
            y1="390.567"
            x2="302.25"
            y2="528.567"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          <motion.line
            x1="74.5"
            y1="189"
            x2="74.5"
            y2="383"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          <motion.line
            x1="73.9531"
            y1="384.078"
            x2="302.546"
            y2="516.056"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Wall Edge Right */}
          <motion.path
            d="M304.997 43.1858L543.747 181.011"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          <motion.line
            x1="304.994"
            y1="55.193"
            x2="533.507"
            y2="187.125"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          <motion.path
            d="M533.5 187L533.5 382.983"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Bottom wall edge right */}
          <motion.path
            d="M533.752 382.56L302.151 516.264"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          <motion.line
            x1="542.817"
            y1="389.68"
            x2="302.31"
            y2="528.537"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          <motion.path
            d="M543.5 180.593L543.5 390"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          <motion.path
            d="M533.497 187.149L543.329 181.455"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          <motion.line
            x1="302.5"
            y1="529"
            x2="302.5"
            y2="516"
            stroke="white"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Thich wall edge left/bottom */}
          <motion.path
            d="M63.5 391V183.5L74.5 189.5V384L302.5 516V528.5L63.5 391Z"
            // fill="var(--color-bg)"
            stroke={"white"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={houseDrawingTransition}
          />
          {/*  Door */}
          <Door
            opacity={activeSection === 1 ? 0 : 0.6}
            transition={houseDrawingTransition}
            activeSection={activeSection}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Roof Right */}
          <motion.path
            opacity="0.6"
            d="M422 1L544.5 180.5L302.5 321.5L181 144L422 1Z"
            fill="var(--color-bg)"
            stroke="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={houseDrawingTransition}
          />
          {/*  ---------------------------------------------------------------------- */}
          {/*  Roof Left */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={houseDrawingTransition}
            d="M304.5 43.5L422.5 2L182.5 144L64 183L304.5 43.5Z"
            fill="var(--color-bg)"
            opacity="0.6"
            stroke="white"
          />
          {/*  Wall Right */}
          <motion.path
            opacity="0.6"
            d="M543.5 389.497L302.478 528.497V321.497L543.5 181.497V389.497Z"
            fill="var(--color-bg)"
            stroke="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={houseDrawingTransition}
          />
        </>
      )}

      {/*  ---------------------------------------------------------------------- */}

      {/*  ---------------------------------------------------------------------- */}
    </motion.svg>
  );
};

export default Complete;
