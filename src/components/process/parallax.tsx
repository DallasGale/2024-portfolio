import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import ServiceDescription from "./serviceDescription";
import Complete from "./svgs/complete";

import styles from "./styles.module.scss";
import FloatingElement from "@components/floatingElement";

const Parallax = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [ref1, inView1] = useInView({
    threshold: 0.5,
    rootMargin: "-100px 0px -20% 0px", // Adjusts the intersection root bounds
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position relative to the section
      const section = document.querySelector("#process-section");
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      // console.log({ sectionRect });
      const adjustedPosition = sectionRect.top - 100;

      console.log({ adjustedPosition });

      // Define scroll breakpoints for transitions
      // if (inView1) {
      //   setActiveSection(1);
      // }
      if (adjustedPosition > 100) {
        setActiveSection(0);
      }
      if (adjustedPosition < 100) {
        setActiveSection(1);
      }
      if (adjustedPosition < -1200) {
        setActiveSection(2);
      }
      if (adjustedPosition < -2400) {
        setActiveSection(3);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView1]);

  return (
    <div className={styles.container}>
      {/* Fixed position descriptions */}

      <ServiceDescription
        ref={ref1}
        id={1}
        active={activeSection === 1}
        title="Design"
        description="Like an architect, we plan out the look & feel. Think of it like building a custom home - every element is thoughtfully designed around how you want to welcome and guide your visitors.<br /><br />From the first impression to the final interaction, I create an experience that's uniquely yours."
      />

      <ServiceDescription
        id={2}
        active={activeSection === 2}
        title="Development"
        description="While the design makes it beautiful, the construction makes it work. Every feature is carefully built using modern tools and best practices to ensure your website is fast, secure, and reliable. <br /><br />The result is a seamless user experience with smooth interactions, elegant animations, and engaging scroll effects that keep visitors immersed in your content."
      />

      <ServiceDescription
        id={3}
        active={activeSection === 3}
        title="Content Management"
        description="Instead of a rigid, one-size-fits-all system, I create a custom content dashboard (sanity.io) tailored exactly to your business. <br /><br />Rather than giving you a complicated control panel with hundreds of confusing buttons, you get exactly what you need - an easy way to update your text, images, and important information."
      />

      <FloatingElement duration={6}>
        <div className={styles.stepWrapper}>
          {activeSection && <Complete activeSection={activeSection} />}
        </div>
      </FloatingElement>
    </div>
  );
};

export default Parallax;
