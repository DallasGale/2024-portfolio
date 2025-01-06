import styles from "./styles.module.scss";
import FloatingElement from "@components/floatingElement";
import Accordion from "@components/accordion";
import PrimaryCta from "@components/primaryCta";
import SecondaryCta from "@components/secondaryCta";
import type { ProjectTypes } from "../data";
import DraggableModal from "@components/modal";
import { useEffect, useRef, useState } from "react";
import { parallax } from "src/utils/parallax";

interface Props {
  projects: ProjectTypes[];
}
const ProjectList = ({ projects }: Props) => {
  const [selectedProject, setSelectedProject] = useState<ProjectTypes | null>();
  const [toggleModal, setToggleModal] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Apply parallax to all project elements
      projectRefs.current.forEach((containerRef, index) => {
        if (containerRef) {
          // Apply parallax relative to each container
          parallax(`.macbook-scroll-${projects[index].id}`, 2.4, containerRef);
          parallax(
            `.iphone-scroll-${projects[index].id}`,
            2 + projects[index].id,
            containerRef,
          );
        }
      });
    };
    // Initial calculation
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Add resize listener to handle window size changes
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [projects]);
  return (
    <>
      <div className={styles.swiper}>
        {projects.map((project, index) => {
          const {
            id,
            project: projectName,
            logo,
            images: { mobile, desktop },
          } = project;
          return (
            <div
              className={styles.container}
              key={id}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className={styles.details}>
                <div className={`${styles.stickyContainer}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <picture className={styles.logoContainer}>
                      <img src={logo} className={styles.logo} />
                    </picture>
                  </div>

                  <div className={styles.ctaWrapper}>
                    <SecondaryCta
                      label="Details"
                      onClick={() => setToggleModal(true)}
                    />
                    <SecondaryCta label="Visit" onClick={() => null} />
                  </div>
                </div>
              </div>

              <div className={styles.mockUpContainer}>
                <div
                  className={`macbook-scroll-${id} ${styles.macBookContainer}`}
                >
                  <picture
                    className={`${styles.picture} ${styles.pictureMacBook}`}
                  >
                    <img
                      src={desktop}
                      alt={projectName}
                      className={styles.desktop}
                    />
                  </picture>
                </div>
                <div className={styles.iPhoneContainer}>
                  <picture
                    className={`${styles.picture} ${styles.pictureIphone} iphone-scroll-${id}`}
                  >
                    <FloatingElement duration={3}>
                      <img
                        src={mobile[0]}
                        alt={projectName}
                        className={styles.mobile}
                      />
                    </FloatingElement>
                  </picture>
                  <picture
                    className={`${styles.picture} ${styles.pictureIphone} iphone-scroll-${id}`}
                  >
                    <FloatingElement duration={5}>
                      <img
                        src={mobile[1]}
                        alt={projectName}
                        className={styles.mobile}
                      />
                    </FloatingElement>
                  </picture>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* // Details Modal */}
      <DraggableModal
        open={toggleModal}
        {...selectedProject}
        logo={`${selectedProject?.logo}`}
        title={`${selectedProject?.project}`}
        setOpen={setToggleModal}
        content={selectedProject?.description}
      />
    </>
  );
};

export default ProjectList;
