import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from './components/questionsData';

// 선택된 응답을 저장하기 위한 타입을 정의합니다.
type SelectedResponse = {
  [questionId: number]: number; // 각 문항 ID에 대한 응답 번호.
};

const Question4: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleBeforeClick = () => {
    navigate('/question3');
  };

  const handleNextClick = () => {
    navigate('/result');
  };

  // 'selected' 상태 초기화를 위한 타입 지정.
  const [selected, setSelected] = useState<SelectedResponse>({});

  // 매개변수에 타입 지정.
  const handleResponse = (questionId: number, option: number) => {
    setSelected(prev => ({
      ...prev,
      [questionId]: option, // 문항 ID와 선택된 응답을 객체에 저장.
    }));
  };

  // 선택 옵션 버튼 렌더링 함수.
  const renderOptions = (questionId: number) => {
    const options = [1, 2, 3, 4, 5];
    return options.map(number => (
      <button
        key={number}
        className={`rounded-full h-12 w-12 flex items-center justify-center ${
          selected[questionId] === number ? 'bg-blue-500' : 'bg-gray-200'
        }`}
        onClick={() => handleResponse(questionId, number)}
      >
        {number}
      </button>
    ));
  };

  // 문항들을 렌더링하는 함수를 수정합니다.
  const renderQuestions = () => {
    // questions 배열에서 6번째부터 10번째까지의 질문 데이터만 가져와 렌더링합니다.
    // 배열 인덱싱은 0부터 시작하므로, 5부터 10까지가 실제로는 6번째부터 10번째에 해당합니다.
    return questions.slice(15, 20).map((question, index) => {
      const questionId = index + 16; // 질문 ID를 6부터 시작하도록 설정합니다.

      return (
        <div
          key={questionId}
          className="mb-6 w-full  text-center border-b border-gray-300 pb-4"
        >
          {/* 문항 내용 */}
          <div className="flex justify-center items-center mb-2">
            <span className="text-lg mr-2">Q{questionId}.</span>{' '}
            {/* 질문 번호 표시 */}
            <span className="text-base">
              {question.text} {/* 질문 텍스트를 동적으로 가져옵니다. */}
            </span>
          </div>
          {/* 응답 옵션 렌더링 */}
          <div className="flex justify-center mt-4">
            {renderOptions(questionId)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div
        className="w-1/3 bg-white flex flex-col items-center justify-center rounded-lg shadow-lg p-8"
        style={{ backgroundColor: '#D9D9D9' }} // 배경색이 필요하면 스타일에 남겨둡니다.
      >
        {/* Header Section */}
        <div className="flex flex-col  w-full">
          <div className="flex space-x-2 text-xl transform-origin-top-left mb-4">
            <div className="inline-block">DOKIDOKI</div>
            <div className="inline-block">MBTI</div>
          </div>
        </div>

        {/* Question Section */}
        <div className="flex flex-col items-center bg-gray-300 w-full p-4 rounded-lg mb-4">
          {renderQuestions()} {/* 문항들을 렌더링합니다. */}
        </div>

        {/* Navigation Buttons */}
        <div className="flex w-full justify-between mt-6">
          <button
            className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-400"
            onClick={handleBeforeClick}
          >
            이전
          </button>
          <button
            className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-400"
            onClick={handleNextClick}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question4;
