import React, { useState, useEffect } from 'react';
import Explanation from './components/Explanation';
import { Character } from '@/types/mbtiCharacter';

const Result = () => {
  const [myMbtiCharacter, setMyMbtiCharacter] = useState<Character | null>(
    null,
  );

  useEffect(() => {
    const fetchMbtiCharacter = async () => {
      try {
        const response = await fetch('/data/resultMbtiFeature.json');
        const data = await response.json();
        setMyMbtiCharacter(data);
      } catch (error) {
        console.log('에러는 = ', error);
      }
    };

    fetchMbtiCharacter();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-2 border-4 border-olive-green rounded-2xl w-1/3 h-90%">
        <div className="border-2 h-1/6">nav bar</div>
        <Explanation myMbtiCharacter={myMbtiCharacter} />
      </div>
    </div>
  );
};

export default Result;
