import React, { FunctionComponent } from 'react';

const Question1: FunctionComponent = () => {
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
          <div className="flex items-center mb-2">
            <span className="text-lg mr-2">Q.</span>
            <span className="text-base">
              친한 사람이나 친구가 없는 모임에 가면
            </span>
          </div>
          <div className="text-base ml-2">매우 불편한 편이다</div>
          <div className="flex items-center mb-2">
            <span className="text-lg mr-2">Q.</span>
            <span className="text-base">
              친한 사람이나 친구가 없는 모임에 가면
            </span>
          </div>
          <div className="text-base ml-2">매우 불편한 편이다</div>
          <div className="flex items-center mb-2">
            <span className="text-lg mr-2">Q.</span>
            <span className="text-base">
              친한 사람이나 친구가 없는 모임에 가면
            </span>
          </div>
          <div className="text-base ml-2">매우 불편한 편이다</div>
          <div className="flex items-center mb-2">
            <span className="text-lg mr-2">Q.</span>
            <span className="text-base">
              친한 사람이나 친구가 없는 모임에 가면
            </span>
          </div>
          <div className="text-base ml-2">매우 불편한 편이다</div>
          <div className="flex items-center mb-2">
            <span className="text-lg mr-2">Q.</span>
            <span className="text-base">
              친한 사람이나 친구가 없는 모임에 가면
            </span>
          </div>
          <div className="text-base ml-2">매우 불편한 편이다</div>
        </div>

        {/* Similar block can be repeated for multiple questions if needed */}

        {/* Navigation Buttons */}
        <div className="flex w-full justify-between mt-6">
          <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-400">
            이전
          </button>
          <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-400">
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
