import * as motion from "motion/react-client";
export interface Props {
  transition: {
    duration: number;
  };
  opacity: number;
  activeSection: number;
}

const Door = ({ transition, opacity, activeSection }: Props) => {
  const animate = activeSection === 1 ? 1 : 0.0;
  return (
    <g>
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="146.594"
        y1="317"
        x2="146.594"
        y2="439.252"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="149.237"
        y1="324.269"
        x2="149.237"
        y2="441.234"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="155.185"
        y1="328.234"
        x2="155.185"
        y2="438.591"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="200.12"
        y1="348.719"
        x2="200.12"
        y2="470.31"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="195.494"
        y1="351.363"
        x2="195.494"
        y2="467.667"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="199.365"
        y1="349.149"
        x2="145.839"
        y2="317.43"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="195.265"
        y1="351.381"
        x2="148.628"
        y2="324.455"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="195.715"
        y1="462.107"
        x2="154.473"
        y2="438.297"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="200.126"
        y1="470.58"
        x2="145.75"
        y2="439.186"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
      <motion.line
        initial={{ pathLength: 0.001 }}
        animate={{ pathLength: 1 }}
        x1="154.791"
        y1="438.079"
        x2="149.792"
        y2="440.965"
        stroke="white"
        opacity={opacity}
        transition={transition}
      />
    </g>
  );
};

export default Door;
