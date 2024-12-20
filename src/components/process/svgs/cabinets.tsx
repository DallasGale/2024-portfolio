import * as motion from "motion/react-client";
export interface Props {
  transition: {
    duration: number;
  };
  opacity: number;
  activeSection: number;
}

const Cabinets = ({ transition, opacity, activeSection }: Props) => {
  const animate = activeSection === 3 ? 1 : 0.0;
  return (
    <g>
      <motion.path
        d="M108.446 250.052V180.05C108.446 179.697 108.633 179.369 108.937 179.189L303.177 64.2711C303.489 64.0865 303.877 64.0852 304.19 64.2676L419.715 131.556C420.022 131.735 420.211 132.064 420.211 132.42V203.408C420.211 203.779 420.006 204.12 419.678 204.293L390.445 219.699C390.14 219.86 389.774 219.852 389.476 219.679L307.596 172.051C307.443 171.962 307.269 171.915 307.093 171.915H303.951C303.775 171.915 303.602 171.961 303.45 172.05L138.391 267.707C138.078 267.888 137.692 267.887 137.381 267.703L108.938 250.914C108.633 250.734 108.446 250.406 108.446 250.052Z"
        // fill="var(--color-bg)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
      <motion.path
        d="M389 220V148L419 130.5V203.5L389 220Z"
        fill="var(--color-accent)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
      <motion.path
        d="M306.5 123V99L348 123V147L306.5 123Z"
        fill="var(--color-accent)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
      <motion.path
        d="M137 219.5L137 195L178.5 171V196L137 219.5Z"
        fill="var(--color-accent)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
      <motion.path
        d="M243 138.5L258 129L258 146.5L243 138.5Z"
        fill="var(--color-accent)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
      <motion.path
        d="M243 159.5L258 150V167.5L243 159.5Z"
        fill="var(--color-accent)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
      <motion.path
        d="M240.5 182.5L258 172V193L240.5 182.5Z"
        fill="var(--color-accent)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
      <motion.path
        d="M137 195L137 268M137 195L137 219.5L178.5 196V171L137 195ZM178 170V243M220 147V220M261 122V195M258 129V194M258 129L243 138.5L258 146.5L258 129ZM223 149V214M303 98V171M306 98V171M348 122V195M389 146V219M419 131V203M108 178L108 251M304.291 65.5015L107.708 178.998M303.142 171.246L136.857 267.251M333.291 81.5015L136.708 194.998M305.23 65.5986L418.877 131.213M306.053 122.907L347.946 147.094M277.108 81.8115L389.474 146.686M108.158 178.72L136.841 195.28M108.158 251L136.841 267.561M137.236 218.979L177.763 195.581M222.958 149.327L258.041 129.071M222.958 213.255L258.041 193M222.958 192.255L258.041 172M222.958 188.255L258.041 168M222.958 171.255L258.041 151M222.958 167.255L258.041 147M418.683 203L390 219.561M417.683 131L389 147.561M376.683 107L348 123.56M261.683 123.561L233 107M219.683 147.561L191 131M257.928 147.161L242.754 138.4M257.928 168.161L242.754 159.4M258.013 193.016L240.915 183.144M178.683 171.561L150 155M306.162 170.717L389.521 218.844M389 148V220L419 203.5V130.5L389 148ZM306.5 99V123L348 147V123L306.5 99ZM258 150L243 159.5L258 167.5V150ZM258 172L240.5 182.5L258 193V172Z"
        stroke="white"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animate }}
        opacity={opacity}
        transition={transition}
      />
    </g>
  );
};

export default Cabinets;
