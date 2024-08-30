import { memo } from "react";
import { useParallax } from "react-scroll-parallax";
import Card, { type CardProps } from ".";
import type { CardGroupProps } from "../cardGroup";

interface Props extends CardProps {
  index: number;
}
const ParallaxCard = memo(
  ({
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
    index,
  }: Props) => {
    const { ref } = useParallax<HTMLDivElement>({
      speed: -10 - index * 2, // Vary speed based on index
      scale: [1, 1.2],
    });

    return (
      <div ref={ref}>
        <Card
          logo={logo}
          projectUrl={projectUrl}
          date={date}
          info={info}
          role={role}
          tech={tech}
          name={name}
          image={image}
          imageAltText={imageAltText}
          onClick={onClick}
          isActive={isActive}
        />
      </div>
    );
  },
);

export default ParallaxCard;
