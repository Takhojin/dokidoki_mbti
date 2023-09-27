import React, { FC } from 'react';
import CombinationCard from './CombinationCard';

interface ExplanationProps {
  myMbtiCharacter: {
    mbti: string;
    character: string[];
  } | null;
}

const Explanation: FC<ExplanationProps> = ({ myMbtiCharacter }) => {
  const mbtiCharacters = myMbtiCharacter?.character;

  console.log('@', myMbtiCharacter);

  return (
    <div className="mb-4 flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-olive-green scrollbar-thumb-rounded-xl h-5/6">
      <header className="pt-4 flex flex-col justify-center items-center">
        <p className="pb-4 text-sm">
          <span className="text-xl font-semibold">이경진</span>&nbsp;&nbsp;님의
          유형은
        </p>
        <p className="pb-4">호기심 많은 예술가,&nbsp;성인군자형</p>
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
            <li>"다시 한 번 검사를 해보는 건 어떨까요?"</li>
          )}
          {mbtiCharacters !== null &&
            mbtiCharacters !== undefined &&
            mbtiCharacters.length > 0 &&
            mbtiCharacters?.map(character => (
              <li className="font-semibold">*&nbsp;{character}</li>
            ))}
        </ul>
        <div className="pt-4">
          <CombinationCard />
        </div>
      </main>
    </div>
  );
};

export default Explanation;
