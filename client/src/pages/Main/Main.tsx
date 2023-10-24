import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

const Main: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/question');
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div
        className="w-1/3 h-90% bg-white flex flex-col items-center justify-center tems-center min-h-screen pl-4 pr-4 pt-48 pb-8"
        style={{ backgroundColor: '#D9D9D9' }}
        onClick={handleStartClick}
      >
        <div className="w-full flex justify-start">
          <div className="text-7xl webkit-background-clip-text webkit-text-fill-transparent inline-block max-w-full transform rotate-[-23.79deg] transform-origin-center mb-4">
            Doki
          </div>
        </div>
        <div className="bg-gainsboro w-full h-full flex justify-center items-center relative mb-4">
          <div className="w-full flex justify-center overflow-hidden">
            <div className="text-9xl webkit-background-clip-text webkit-text-fill-transparent inline-block max-w-full truncate transform rotate-[-23.79deg] transform-origin-top-left mb-4">
              Doki
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div className="text-4xl w-[78px] h-11 mb-12">MBTI</div>
        </div>
        <button className="text-2xl w-[240px] h-[60px] bg-[#FCACAC] border-none rounded flex items-center justify-center focus:outline-none my-24">
          Start
        </button>

        <div className="w-full flex justify-end mt-auto">
          <div className="text-sm inline-block w-[64px] h-[19px] mb-4">
            (주) GBS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
