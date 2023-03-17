import React from "react";

const TimeLine = () => {
  return (
    <div className="timeline__container flex border-b border-[#3b4754]">
      <div className="timeline__buttons__container flex  items-center">
        <div className="timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer hover:text-[#5AC53B]">LIVE</div>
        <div className="timeline__button  px-[10px] pt-[10px] pb-[20px] cursor-pointe hover:text-[#5AC53B]r">1D</div>
        <div className="timeline__button active px-[10px] pt-[10px] pb-[20px] cursor-pointer">1W</div>
        <div className="timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer hover:text-[#5AC53B]">3M</div>
        <div className="timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer hover:text-[#5AC53B]">1Y</div>
        <div className="timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer hover:text-[#5AC53B]">ALL</div>
      </div>
    </div>
  );
};

export default TimeLine;
