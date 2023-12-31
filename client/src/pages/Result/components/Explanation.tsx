import React, { FC } from 'react';
import CombinationCard from './CombinationCard';
import { Character } from '@/types/mbtiCharacter';
import { faHeart as heart } from '@fortawesome/free-solid-svg-icons';
import { faHeartCrack as heartCrack } from '@fortawesome/free-solid-svg-icons';

interface ExplanationProps {
  myMbtiCharacter: Character | null | undefined;
}

const Explanation: FC<ExplanationProps> = ({ myMbtiCharacter }) => {
  const mbtiCharacters = myMbtiCharacter?.character;

  return (
    <div className="mb-4 flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-olive-green scrollbar-thumb-rounded-xl h-5/6">
      <header className="pt-4 flex flex-col justify-center items-center leading-loose">
        <p className="text-sm">
          <span className="text-xl font-semibold">이경진</span>&nbsp;&nbsp;님의
          유형은
        </p>
        <p>
          호기심 많은 예술가,
          <span className="text-lg text-olive-green font-semibold">
            &nbsp;성인군자형
          </span>
        </p>
        <p className="text-2xl font-semibold">ISFP</p>
        <img
          src="/images/Components/Result/isfp.PNG"
          alt="myMbti"
          className="w-1/3 flex items-center justify-center"
        />
      </header>
      <main className="pt-10 pr-6 pl-4">
        <p className="pb-2 border-b-2 border-b-gray text-sm ">
          <span className="text-2xl text-olive-green font-semibold">ISFP</span>
          는요...
        </p>
        <ul className="pt-4">
          {(mbtiCharacters === null || mbtiCharacters?.length === 0) && (
            <li>"결과가 없습니다"</li>
          )}
          {mbtiCharacters !== null &&
            mbtiCharacters !== undefined &&
            mbtiCharacters.length > 0 &&
            mbtiCharacters?.map(character => (
              <li className="font-semibold leading-loose">
                *&nbsp;{character}
              </li>
            ))}
        </ul>
        <div className="pt-20 flex h-96">
          <CombinationCard
            icon={heart}
            mbti="ESTJ"
            goodOrBad="최고의 짝꿍"
            imgSrc="/images/Components/Result/estj.PNG"
          />
          <CombinationCard
            icon={heartCrack}
            mbti="ENTJ"
            goodOrBad="으르릉 물어요"
            imgSrc="/images/Components/Result/entj.PNG"
          />
        </div>
      </main>
      <div className="flex items-center px-6 pt-20 pb-12">
        <div className="flex-1 border-t-2 border-gray" />
        <p className="px-2 text-xl font-semibold">친구에게 공유하기</p>
        <div className="flex-1 border-t-2 border-gray" />
      </div>
      <div className="text-center">친구 공유 아이콘</div>
    </div>
  );
};

export default Explanation;
