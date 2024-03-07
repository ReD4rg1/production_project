import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./StarRating.module.scss";
import { memo, useState } from "react";
import { Icon } from "../../redesigned/Icon/Icon";
import StarIcon from "@/shared/assets/icons/star.svg?react";

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStars?: number;
  onSelect?: (starsCount: number) => void;
}

const stars = [1, 2, 3, 4, 5];
/**
 * @deprecated
 * */
export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 40, selectedStars = 0, onSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(
            cls.starIcon,
            { [cls.isSelected]: isSelected },
            []
          )}
          fillIcon={currentStarsCount >= starNumber}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarsCount >= starNumber}
        />
      ))}
    </div>
  );
});
