import type { ProjectTypes } from "@components/projects/index.astro";
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import FloatingElement from "@components/floatingElement";

interface Props {
  projects: ProjectTypes[];
}
const Carousel = ({ projects }: Props) => {
  return (
    <div className={styles.swiper}>
      {projects.map(
        ({
          id,
          project,
          contracted,
          hashtags,
          logo,
          client,
          videos,
          agency,
          description,
          images: { mobile, desktop },
        }) => (
          <div className={styles.container}>
            <div className={styles.details}>
              <div className={`content-bg  ${styles.stickyContainer}`}>
                <FloatingElement duration={46}>
                  <picture className={styles.logoContainer}>
                    <img src={logo} className={styles.logo} />
                  </picture>
                </FloatingElement>
                <div>
                  <h2 className={`paragraph2`}>
                    {agency ? "Agency" : "Client"} : <strong>{agency}</strong>
                  </h2>
                  <br />
                  {client ? (
                    <h3 className={`paragraph2`}>
                      Client: <strong>{project}</strong>
                    </h3>
                  ) : (
                    <h3 className={`paragraph2`}>
                      Project: <strong>{project}</strong>
                    </h3>
                  )}
                  <br />
                </div>
                <div className={styles.projectBody}>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    className={`paragraph2`}
                  >
                    {description}
                  </ReactMarkdown>
                </div>
                {hashtags && (
                  <div className={styles.hashtags}>
                    {hashtags.map((hashtag) => (
                      <div className={styles.hashtag}>
                        <p className="paragraph2">{hashtag}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.mediaContainer}>
              <div className={styles.imagesContainer}>
                <FloatingElement duration={26} className={styles.pictureMobile}>
                  <picture
                    className={`${styles.picture} ${styles.pictureMobile}`}
                  >
                    <img src={mobile} alt={project} className={styles.mobile} />
                  </picture>
                </FloatingElement>

                <FloatingElement
                  duration={26}
                  className={styles.pictureDesktop}
                >
                  <picture
                    className={`${styles.picture} ${styles.pictureDesktop}`}
                  >
                    <img
                      src={desktop}
                      alt={project}
                      className={styles.desktop}
                    />
                  </picture>
                </FloatingElement>
              </div>

              <div className={styles.videosContainer}>
                {videos &&
                  videos.map((video, index) => {
                    console.log({ video });
                    return (
                      <FloatingElement duration={23} delay={index * 2}>
                        <div
                          key={`video-${index}`}
                          className={styles.videoWrapper}
                        >
                          <div className={styles.videoContainer}>
                            <iframe
                              src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                              frameBorder={0}
                              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                              title="The Kayo Call Up! 2024 Project w/Thinkerbell"
                            />
                          </div>
                        </div>
                      </FloatingElement>
                    );
                  })}
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default Carousel;
