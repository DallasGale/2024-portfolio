import classNames from "classnames";
import styles from "./styles.module.css";

export type PopupInfo = {
  name: string;
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
  name,
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
    <div
      className={cardClasses}
      onClick={() =>
        onClick({ name, role, logo, projectUrl, date, info, tech })
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
  );
};
export default Card;
