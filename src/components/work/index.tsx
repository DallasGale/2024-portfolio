import SectionTitle from "@components/sectionTitle/sectionTitle.astro";
import CardGroup from "./cardGroup";
import styles from "./styles.module.css";
import data from "./data.json";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <div style={{ width: 300, height: 300, backgroundColor: "red" }} />
        {/* <img src={`/${id}.jpg`} alt="A London skyscraper" /> */}
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}
const Work = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className={styles.section} id="work">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <div>
        <h2>Work</h2>
      </div>
      {/* <SectionTitle title="Work" id="work-title" /> */}
      <div className={styles.container}>
        <div className={styles.cardList}>
          <CardGroup cards={data} />
        </div>
      </div>
    </section>
  );
};

export default Work;
