import classNames from "classnames";
import styles from "./styles.module.css";
import SimpleParallax from "simple-parallax-js";

export type PopupInfo = {
  project: string;
  company: string;
  logo: string;
  projectUrl: string;
  date: string;
  info: string;
  role: string;
  tech: string[];
};

export interface CardProps extends PopupInfo {
  image: string;
  imageAltText: string;
  isActive: boolean;
  onClick: (props: PopupInfo) => void;
}
const Card = ({
  project,
  company,
  logo,
  projectUrl,
  date,
  info,
  role,
  tech,
  image,
  imageAltText,
  onClick,
  isActive,
}: CardProps) => {
  const cardClasses = classNames(styles.card, {
    [styles.isActive]: isActive,
  });

  return (
    <button
      className={cardClasses}
      onClick={() =>
        onClick({ project, company, role, logo, projectUrl, date, info, tech })
      }
    >
      {/* <SimpleParallax scale={1.25} orientation="down"> */}
      <img
        src={image}
        className={styles.image}
        alt={imageAltText}
        width={600}
        height={600}
        decoding="async"
        loading="lazy"
      />
      {/* </SimpleParallax> */}
    </button>
  );
};
export default Card;
