import React from "react";
import { motion } from "motion/react";
import styles from "./styles.module.scss";

const FloatingBio = ({ signatureSrc }) => {
  const text = `Based in the Yarra Valley, Australia, I bring over a decade of experience crafting digital experiences at leading agencies, ABC News, innovative startups and through freelance projects, I now offer specialised web design and development services to turn your vision into reality.`;

  const highlightWords = [
    "leading agencies",
    "ABC News",
    "innovative startups",
    "freelance projects",
  ];

  // Split text while preserving important phrases
  const processText = (text, highlights) => {
    let words = text;
    highlights.forEach((phrase) => {
      words = words.replace(phrase, `|${phrase}|`);
    });
    return words.split(/\s|\|/).filter((word) => word.trim().length > 0);
  };

  const words = processText(text, highlightWords);

  const getRandomFloat = (base, variance) =>
    base + (Math.random() - 0.5) * variance;

  return (
    <section className={styles.container}>
      <h2 className="display2">
        {words.map((word, index) => {
          const isHighlighted = highlightWords.includes(word);

          const floatAnimation = {
            y: [
              0,
              getRandomFloat(-10, 4),
              getRandomFloat(-8, 4),
              getRandomFloat(-12, 4),
              0,
            ],
            x: [
              0,
              getRandomFloat(4, 2),
              getRandomFloat(-4, 2),
              getRandomFloat(2, 2),
              0,
            ],
          };

          return (
            <motion.span
              key={index}
              className={`${styles.word} ${isHighlighted ? styles.highlight : ""}`}
              animate={floatAnimation}
              transition={{
                duration: getRandomFloat(35, 2),
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                ease: "easeInOut",
                delay: -index * 0.1, // Stagger the animations
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </h2>
      <motion.img
        src={signatureSrc}
        alt="Dallas"
        className={styles.signature}
        animate={{
          y: [-5, 5, -5],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default FloatingBio;
