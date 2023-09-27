import React, { useState, useEffect, FC } from 'react';

interface ExplanationProps {
  myMbtiCharacter: {
    mbti: string;
    character: string[];
  } | null;
}

const Explanation: FC<ExplanationProps> = ({ myMbtiCharacter }) => {
  console.log('@', myMbtiCharacter);

  return (
    <div className="pt-9 flex flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-olive-green scrollbar-thumb-rounded-xl h-5/6">
      <header className="mb-10 flex flex-col justify-center items-center">
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
      <main className="pr-6 pl-4">
        <p className="pb-2 border-b-2 border-b-gray text-sm ">
          <span className="text-2xl">ISFP</span>는요...
        </p>
        <ul>
          <li>hi</li>
        </ul>
      </main>
    </div>
  );
};

export default Explanation;
