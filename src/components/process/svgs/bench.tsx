import * as motion from "motion/react-client";
export interface Props {
  transition: {
    duration: number;
  };
  opacity: number;
  activeSection: number;
}

const BenchLeft = ({ transition, opacity, activeSection }: Props) => {
  const animate = activeSection === 3 ? 1 : 0.0;
  return (
    <g>
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M301.55 235.83L137.894 330.954C137.585 331.134 137.203 331.135 136.893 330.956L110.508 315.778C109.84 315.394 109.839 314.43 110.507 314.045L304.946 201.793C305.255 201.615 305.636 201.614 305.945 201.793L416.867 265.647C417.54 266.035 417.533 267.009 416.855 267.387L389.889 282.432C389.582 282.602 389.209 282.6 388.905 282.426L307.508 235.827C307.357 235.741 307.186 235.695 307.011 235.695H302.052C301.876 235.695 301.702 235.742 301.55 235.83Z"
        fill="#181818"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M137.722 392.5L108.277 375.5L108.777 374.634L138.222 391.634L137.722 392.5Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M137.722 336.5L108.277 319.5L108.777 318.634L138.222 335.634L137.722 336.5Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M177.687 308.562L149 292L149.5 291.134L178.187 307.696L177.687 308.562Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M214.687 287.562L186 271L186.5 270.134L215.187 286.696L214.687 287.562Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M219.687 283.562L191 267L191.5 266.134L220.187 282.696L219.687 283.562Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M389.143 343.523L306.206 295.639L306.706 294.773L389.643 342.657L389.143 343.523Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M418.7 267.525L304.3 201.475L304.8 200.609L419.2 266.659L418.7 267.525Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M389.83 284.304L306.041 235.929L306.541 235.063L390.33 283.438L389.83 284.304Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M389.87 288.234L306.831 240.291L307.331 239.425L390.37 287.368L389.87 288.234Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M389 344V284H390V344H389Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M348 319V264H349V319H348Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M418 328V267H419V328H418Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M261 320V263H262V320L261 320Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M302 296V235H303V296H302Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M307 296H303V295H307V296Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M307 236H303V235H307V236Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M306 296V235H307V296H306Z"
        fill="white"
      />

      {/*  ---------------------------------------------------------------------- */}
      {/*  Bench Left */}
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M303.08 296.138L136.258 392.452L135.758 391.586L302.58 295.272L303.08 296.138Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M303.074 236.129L137.005 332.009L136.505 331.143L302.574 235.263L303.074 236.129Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M305.238 202.039L109.308 315.159L108.808 314.293L304.738 201.173L305.238 202.039Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M418.781 327.735L390.149 344.265L389.649 343.399L418.281 326.869L418.781 327.735Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M418.781 271.735L390.149 288.265L389.649 287.399L418.281 270.869L418.781 271.735Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M418.781 267.735L390.149 284.265L389.649 283.399L418.281 266.869L418.781 267.735Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M335.631 220L307 236.53L306.5 235.664L335.131 219.134L335.631 220Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M377.096 243.163L348.904 259.439L348.404 258.573L376.596 242.297L377.096 243.163Z"
        fill="white"
      />

      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M178.592 304.128L155.249 290.849L185.189 273.596L208.194 286.959L178.592 304.128Z"
        fill="#181818"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M107.946 320.896C107.946 319.74 109.199 319.018 110.199 319.598L137.054 335.178C137.516 335.447 137.801 335.941 137.801 336.476V389.763C137.801 390.912 136.56 391.635 135.561 391.067L108.706 375.829C108.237 375.563 107.946 375.064 107.946 374.525L107.946 320.896ZM109.697 320.463C109.364 320.27 108.946 320.51 108.946 320.896L108.946 374.525C108.946 374.705 109.043 374.871 109.2 374.959L136.054 390.198C136.387 390.387 136.801 390.146 136.801 389.763V336.476C136.801 336.297 136.706 336.133 136.552 336.043L109.697 320.463Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M262.339 264.749C262.339 263.589 261.078 262.868 260.078 263.457L221.087 286.419C220.63 286.688 220.349 287.18 220.349 287.711V340.984C220.349 342.14 221.601 342.862 222.601 342.282L261.591 319.669C262.054 319.4 262.339 318.906 262.339 318.371L262.339 264.749ZM260.585 264.319C260.918 264.122 261.339 264.363 261.339 264.749L261.339 318.371C261.339 318.549 261.244 318.714 261.09 318.804L222.099 341.417C221.766 341.61 221.349 341.369 221.349 340.984V287.711C221.349 287.534 221.442 287.37 221.595 287.281L260.585 264.319Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M347.675 317.405V264.132C347.675 263.778 347.488 263.45 347.182 263.27L308.192 240.308C307.525 239.916 306.685 240.396 306.685 241.17L306.685 294.792C306.685 295.148 306.875 295.478 307.183 295.657L346.173 318.27C346.84 318.656 347.675 318.175 347.675 317.405Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M306.185 241.17C306.185 240.01 307.446 239.289 308.446 239.878L347.436 262.84C347.894 263.109 348.175 263.601 348.175 264.132V317.405C348.175 318.561 346.922 319.282 345.922 318.702L306.932 296.09C306.469 295.821 306.185 295.327 306.185 294.792L306.185 241.17ZM307.938 240.739C307.605 240.543 307.185 240.783 307.185 241.17L307.185 294.792C307.185 294.97 307.28 295.135 307.434 295.225L346.424 317.837C346.757 318.031 347.175 317.79 347.175 317.405V264.132C347.175 263.955 347.081 263.791 346.929 263.701L307.938 240.739Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M388.926 342.529V289.257C388.926 288.902 388.739 288.575 388.433 288.395L349.443 265.433C348.776 265.04 347.936 265.521 347.936 266.294L347.936 319.916C347.936 320.273 348.125 320.603 348.434 320.781L387.424 343.394C388.091 343.781 388.926 343.3 388.926 342.529Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M347.436 266.294C347.436 265.134 348.697 264.413 349.697 265.002L388.687 287.964C389.145 288.233 389.426 288.725 389.426 289.256V342.529C389.426 343.685 388.173 344.406 387.173 343.827L348.183 321.214C347.72 320.945 347.436 320.451 347.436 319.916L347.436 266.294ZM349.189 265.863C348.856 265.667 348.436 265.907 348.436 266.294L348.436 319.916C348.436 320.094 348.531 320.259 348.685 320.349L387.675 342.961C388.008 343.155 388.426 342.914 388.426 342.529V289.256C388.426 289.079 388.332 288.915 388.18 288.825L349.189 265.863Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M137.301 389.763V336.476C137.301 336.12 137.111 335.79 136.803 335.611L109.948 320.031C109.281 319.644 108.446 320.125 108.446 320.896L108.446 374.525C108.446 374.885 108.64 375.217 108.953 375.395L135.807 390.633C136.474 391.011 137.301 390.53 137.301 389.763Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M137.624 389.452V336.18C137.624 335.825 137.811 335.498 138.116 335.318L177.107 312.356C177.773 311.963 178.614 312.444 178.614 313.217L178.614 366.839C178.614 367.196 178.424 367.525 178.116 367.704L139.126 390.317C138.459 390.704 137.624 390.223 137.624 389.452Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M220.849 340.984V287.712C220.849 287.358 221.036 287.03 221.341 286.85L260.331 263.888C260.998 263.495 261.839 263.976 261.839 264.75L261.839 318.372C261.839 318.728 261.649 319.058 261.34 319.237L222.35 341.849C221.684 342.236 220.849 341.755 220.849 340.984Z"
        fill="#151515"
      />

      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M178.817 329.5V312.26C178.817 311.907 179.002 311.581 179.305 311.401L217.792 288.464C218.458 288.067 219.304 288.547 219.304 289.323L219.304 306.912C219.304 307.267 219.116 307.595 218.81 307.775L180.323 330.362C179.656 330.754 178.817 330.273 178.817 329.5Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M262.176 281.073V263.833C262.176 263.481 262.361 263.154 262.664 262.974L301.151 240.037C301.818 239.64 302.663 240.12 302.663 240.896L302.663 258.485C302.663 258.84 302.475 259.168 302.169 259.348L263.682 281.936C263.016 282.327 262.176 281.846 262.176 281.073Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M262.176 300.458V283.217C262.176 282.865 262.361 282.539 262.664 282.358L301.151 259.421C301.818 259.024 302.663 259.504 302.663 260.28L302.663 277.87C302.663 278.224 302.475 278.553 302.169 278.732L263.682 301.32C263.016 301.711 262.176 301.231 262.176 300.458Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M262.176 317.219V299.978C262.176 299.626 262.361 299.3 262.664 299.119L301.151 276.182C301.818 275.785 302.663 276.266 302.663 277.041L302.663 294.631C302.663 294.986 302.475 295.314 302.169 295.493L263.682 318.081C263.016 318.472 262.176 317.992 262.176 317.219Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M178.817 349.202V331.962C178.817 331.609 179.002 331.283 179.305 331.103L217.792 308.166C218.458 307.769 219.304 308.249 219.304 309.025L219.304 326.614C219.304 326.969 219.116 327.297 218.81 327.477L180.323 350.065C179.656 350.456 178.817 349.975 178.817 349.202Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M178.817 365.053V347.812C178.817 347.46 179.002 347.134 179.305 346.953L217.792 324.017C218.458 323.619 219.304 324.1 219.304 324.876L219.304 342.465C219.304 342.82 219.116 343.148 218.81 343.327L180.323 365.915C179.656 366.307 178.817 365.826 178.817 365.053Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M137.301 389.763V336.476C137.301 336.12 137.111 335.79 136.803 335.611L109.948 320.031C109.281 319.644 108.446 320.125 108.446 320.896L108.446 374.525C108.446 374.885 108.64 375.217 108.953 375.395L135.807 390.633C136.474 391.011 137.301 390.53 137.301 389.763Z"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M137.624 389.452V336.18C137.624 335.825 137.811 335.498 138.116 335.318L177.107 312.356C177.773 311.963 178.614 312.444 178.614 313.217L178.614 366.839C178.614 367.196 178.424 367.525 178.116 367.704L139.126 390.317C138.459 390.704 137.624 390.223 137.624 389.452Z"
        stroke="white"
      />

      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M220.849 340.984V287.712C220.849 287.358 221.036 287.03 221.341 286.85L260.331 263.888C260.998 263.495 261.839 263.976 261.839 264.75L261.839 318.372C261.839 318.728 261.649 319.058 261.34 319.237L222.35 341.849C221.684 342.236 220.849 341.755 220.849 340.984Z"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M178.817 329.5V312.26C178.817 311.907 179.002 311.581 179.305 311.401L217.792 288.464C218.458 288.067 219.304 288.547 219.304 289.323L219.304 306.912C219.304 307.267 219.116 307.595 218.81 307.775L180.323 330.362C179.656 330.754 178.817 330.273 178.817 329.5Z"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M262.176 281.073V263.833C262.176 263.481 262.361 263.154 262.664 262.974L301.151 240.037C301.818 239.64 302.663 240.12 302.663 240.896L302.663 258.485C302.663 258.84 302.475 259.168 302.169 259.348L263.682 281.936C263.016 282.327 262.176 281.846 262.176 281.073Z"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M262.176 300.458V283.217C262.176 282.865 262.361 282.539 262.664 282.358L301.151 259.421C301.818 259.024 302.663 259.504 302.663 260.28L302.663 277.87C302.663 278.224 302.475 278.553 302.169 278.732L263.682 301.32C263.016 301.711 262.176 301.231 262.176 300.458Z"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M262.176 317.219V299.978C262.176 299.626 262.361 299.3 262.664 299.119L301.151 276.182C301.818 275.785 302.663 276.266 302.663 277.041L302.663 294.631C302.663 294.986 302.475 295.314 302.169 295.493L263.682 318.081C263.016 318.472 262.176 317.992 262.176 317.219Z"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M178.817 349.202V331.962C178.817 331.609 179.002 331.283 179.305 331.103L217.792 308.166C218.458 307.769 219.304 308.249 219.304 309.025L219.304 326.614C219.304 326.969 219.116 327.297 218.81 327.477L180.323 350.065C179.656 350.456 178.817 349.975 178.817 349.202Z"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M178.817 365.053V347.812C178.817 347.46 179.002 347.134 179.305 346.953L217.792 324.017C218.458 323.619 219.304 324.1 219.304 324.876L219.304 342.465C219.304 342.82 219.116 343.148 218.81 343.327L180.323 365.915C179.656 366.307 178.817 365.826 178.817 365.053Z"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M137.301 334.762V331.475C137.301 331.119 137.111 330.789 136.803 330.61L109.948 315.031C109.281 314.644 108.446 315.125 108.446 315.896L108.446 319.524C108.446 319.884 108.64 320.216 108.953 320.394L135.807 335.632C136.474 336.01 137.301 335.529 137.301 334.762Z"
        fill="#151515"
      />

      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M418.833 268.086C418.833 266.93 417.58 266.209 416.58 266.789L389.726 282.369C389.263 282.637 388.979 283.131 388.979 283.666V286.953C388.979 288.103 390.219 288.825 391.219 288.258L418.073 273.02C418.543 272.753 418.833 272.255 418.833 271.715L418.833 268.086ZM417.082 267.654C417.415 267.46 417.833 267.701 417.833 268.086L417.833 271.715C417.833 271.895 417.736 272.061 417.58 272.15L390.725 287.388C390.392 287.577 389.979 287.336 389.979 286.953V283.666C389.979 283.488 390.073 283.323 390.228 283.234L417.082 267.654Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M137.3 335.421V332.154C137.3 331.798 137.489 331.47 137.796 331.29L301.174 235.875C301.841 235.486 302.679 235.967 302.679 236.739L302.679 240.369C302.679 240.725 302.489 241.054 302.182 241.233L138.803 336.286C138.137 336.674 137.3 336.193 137.3 335.421Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M389.478 286.973V283.69C389.478 283.331 389.286 282.999 388.974 282.821L307.956 236.535C307.289 236.154 306.46 236.636 306.46 237.403L306.46 241.045C306.46 241.405 306.654 241.737 306.967 241.915L387.985 287.843C388.652 288.221 389.478 287.739 389.478 286.973Z"
        fill="#151515"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M301.745 236C301.745 235.448 302.193 235 302.745 235H306.271C306.823 235 307.271 235.448 307.271 236V295C307.271 295.552 306.823 296 306.271 296H302.745C302.193 296 301.745 295.552 301.745 295V236Z"
        fill="#1A1A1A"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M306.271 236L302.745 236L302.745 295H306.271V236ZM302.745 235C302.193 235 301.745 235.448 301.745 236V295C301.745 295.552 302.193 296 302.745 296H306.271C306.823 296 307.271 295.552 307.271 295V236C307.271 235.448 306.823 235 306.271 235H302.745Z"
        fill="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M347.513 230.167L347.513 237.967M326.358 241.46L347.034 229.808C347.343 229.634 347.721 229.637 348.028 229.815L368.983 241.994C369.642 242.377 369.648 243.327 368.993 243.717L348.644 255.861C348.329 256.049 347.936 256.049 347.62 255.861L326.337 243.19C325.677 242.797 325.688 241.837 326.358 241.46ZM331.786 246.448L347.634 237.384L363.727 246.88L348.311 256.068L331.786 246.448Z"
        stroke="white"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M349.567 247.714C349.931 247.471 350 247.245 350 247.131C350 247.017 349.931 246.792 349.567 246.549C349.21 246.311 348.659 246.131 348 246.131C347.341 246.131 346.79 246.311 346.433 246.549C346.069 246.792 346 247.017 346 247.131C346 247.245 346.069 247.471 346.433 247.714C346.79 247.952 347.341 248.131 348 248.131C348.659 248.131 349.21 247.952 349.567 247.714ZM348 249.131C349.657 249.131 351 248.236 351 247.131C351 246.027 349.657 245.131 348 245.131C346.343 245.131 345 246.027 345 247.131C345 248.236 346.343 249.131 348 249.131Z"
        fill="white"
      />

      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        opacity={opacity}
        d="M418.645 272.348V268.29C418.645 267.53 417.831 267.048 417.164 267.413L389.575 282.536C389.269 282.703 388.899 282.7 388.596 282.526L306.98 235.64C306.829 235.553 306.657 235.507 306.482 235.507H301.983C301.806 235.507 301.632 235.554 301.479 235.643L137.982 330.907C137.672 331.087 137.29 331.088 136.98 330.91L110.075 315.42C109.408 315.036 108.576 315.517 108.576 316.286V320.11C108.576 320.468 108.767 320.798 109.077 320.977L136.981 337.042C137.291 337.221 137.672 337.22 137.981 337.041L301.48 242.43C301.632 242.342 301.805 242.296 301.981 242.296H306.488C306.659 242.296 306.827 242.34 306.977 242.423L388.609 288.233C388.905 288.399 389.264 288.404 389.564 288.246L418.111 273.233C418.439 273.06 418.645 272.719 418.645 272.348Z"
        fill="#1A1A1A"
        stroke="white"
      />
    </g>
  );
};

export default BenchLeft;
