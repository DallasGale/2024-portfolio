import classNames from "classnames";
import styles from "./styles.module.css";

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
  rate: number;
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
  rate,
}: CardProps) => {
  const cardClasses = classNames(styles.card, {
    [styles.isActive]: isActive,
  });

  return (
    <div
      className={`parallax-scroll ${styles.cardWrapper}`}
      data-rate={rate}
      data-direction="verticle"
    >
      <div
        className={cardClasses}
        onClick={() =>
          onClick({
            project,
            company,
            role,
            logo,
            projectUrl,
            date,
            info,
            tech,
          })
        }
      >
        <img
          src={image}
          className={styles.image}
          alt={imageAltText}
          width={600}
          height={600}
          decoding="async"
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default Card;
