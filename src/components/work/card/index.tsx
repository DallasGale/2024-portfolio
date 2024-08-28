import classNames from "classnames";
import styles from "./styles.module.css";

export type PopupInfo = {
  name: string;
  logo: string;
  url: string;
  date: string;
  info: string;
  hashtags: string[];
};

export interface CardProps extends PopupInfo {
  image: string;
  imageAltText: string;
  isActive: boolean;
  onClick: (props: PopupInfo) => void;
}
const Card = ({
  name,
  logo,
  url,
  date,
  info,
  hashtags,
  image,
  imageAltText,
  onClick,
  isActive,
}: CardProps) => {
  const cardClasses = classNames(styles.card, {
    [styles.isActive]: isActive,
  });
  return (
    <div
      className={cardClasses}
      onClick={() => onClick({ name, logo, url, date, info, hashtags })}
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
  );
};

export default Card;
