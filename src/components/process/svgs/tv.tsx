import * as motion from "motion/react-client";
export interface Props {
  transition: {
    duration: number;
  };
  opacity: number;
  activeSection: number;
}

const Tv = ({ transition, opacity, activeSection }: Props) => {
  const animate = activeSection === 3 ? 1 : 0.0;
  return (
    <g>
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M505.131 287.364L432.231 245.387C431.922 245.209 431.73 244.878 431.73 244.521V181.136C431.73 180.758 431.945 180.411 432.283 180.242L435.08 178.844C435.391 178.688 435.761 178.706 436.057 178.89L440.634 181.751C440.967 181.96 441.392 181.953 441.719 181.735L444.34 179.988C444.657 179.777 445.065 179.764 445.395 179.954L505.692 214.747C506.389 215.15 506.35 216.168 505.624 216.516L504.974 216.827C504.258 217.169 504.207 218.168 504.884 218.582L509.134 221.179C509.431 221.361 509.612 221.684 509.612 222.032V285.072C509.612 285.457 509.391 285.808 509.044 285.974L506.061 287.4C505.764 287.542 505.416 287.529 505.131 287.364Z"
        fill="var(--color-accent)"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M431.5 180.711L431.441 180.677L431.5 180.646L434.817 178.919L502.963 217.965L508.88 221.355L509.024 221.277V221.438L508.88 221.355L505.54 223.16L505.5 223.182V223.137L431.5 180.711Z"
        fill="var(--color-accent)"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        transition={transition}
        opacity={opacity}
        d="M431.5 180.342L431.5 245M431.251 244.568L505.251 287.568M434.251 242.568L502.311 281.984M434.36 185.451L502.765 224.935M431.249 180.566L506.249 223.566M434.569 178.777L509.249 221.567M444.398 179.768L506.295 215.491M509.024 221.104V286M505.5 223V288M502.5 224.572V282.414M434.5 185.426L434.5 243M509.225 285.497L505.731 287.494M509.134 221.218L505.485 223.189M506.587 215.873L502.913 217.994M444.842 179.716L440.54 182.115M435.038 178.804L431.232 180.785"
        stroke="white"
      />
    </g>
  );
};

export default Tv;
