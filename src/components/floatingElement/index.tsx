import React from "react";
import { motion } from "motion/react";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration: number;
  className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  duration = 40,
  className,
}) => {
  return (
    <motion.div
      className={className}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
      }}
      animate={{
        y: [-8, 8], // Reduced movement range
        x: [-4, 4], // Reduced movement range
        rotate: [-1, 1], // Reduced rotation
      }}
      transition={{
        y: {
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        },
        x: {
          duration: duration * 1.1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        },
        rotate: {
          duration: duration * 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
