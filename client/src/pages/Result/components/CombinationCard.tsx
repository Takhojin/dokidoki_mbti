import React, { FC } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CombiProps {
  mbti: string;
  goodOrBad: string;
  imgSrc: string;
  icon: IconDefinition;
}

const CombinationCard: FC<CombiProps> = ({ icon, mbti, goodOrBad, imgSrc }) => {
  return (
    <div className="flex flex-col items-center w-1/2 leading-loose">
      <FontAwesomeIcon icon={icon} size="lg" className="text-red-500" />
      <p>{goodOrBad}</p>
      <p className="text-xl font-semibold">{mbti}</p>
      <img src={imgSrc} className="h-2/3" alt="mbtiImg" />
    </div>
  );
};

export default CombinationCard;
