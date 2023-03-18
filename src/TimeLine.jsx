import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

const TimeLine = () => {
  const [activeTable, setActiveTable] = useState("1W");

  return (
    <div className="timeline__container flex border-b border-[#3b4754]">
      <div className="timeline__buttons__container flex  items-center">
        <div
          className={`timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer ${
            activeTable === "LIVE"
              ? "text-[#5AC53B] border-b-2 border-[#5AC53b]"
              : "hover:text-[#5AC53B]"
          }`}
          onClick={() => {
            setActiveTable("LIVE");
          }}
        >
          <CircleIcon
            style={{
              fontSize: "14px",
              paddingRight: "3px",
              paddingBottom: "4px",
            }}
          />
          LIVE
        </div>
        <div
          className={`timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer ${
            activeTable === "1D"
              ? "text-[#5AC53B] border-b-2 border-[#5AC53b]"
              : "hover:text-[#5AC53B]"
          }`}
          onClick={() => {
            setActiveTable("1D");
          }}
        >
          1D
        </div>
        <div
          className={`timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer ${
            activeTable === "1W"
              ? "text-[#5AC53B] border-b-2 border-[#5AC53b]"
              : "hover:text-[#5AC53B]"
          }`}
          onClick={() => {
            setActiveTable("1W");
          }}
        >
          1W
        </div>
        <div
          className={`timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer ${
            activeTable === "3M"
              ? "text-[#5AC53B] border-b-2 border-[#5AC53b]"
              : "hover:text-[#5AC53B]"
          }`}
          onClick={() => {
            setActiveTable("3M");
          }}
        >
          3M
        </div>
        <div
          className={`timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer ${
            activeTable === "1Y"
              ? "text-[#5AC53B] border-b-2 border-[#5AC53b]"
              : "hover:text-[#5AC53B]"
          }`}
          onClick={() => {
            setActiveTable("1Y");
          }}
        >
          1Y
        </div>
        <div
          className={`timeline__button px-[10px] pt-[10px] pb-[20px] cursor-pointer ${
            activeTable === "ALL"
              ? "text-[#5AC53B] border-b-2 border-[#5AC53b]"
              : "hover:text-[#5AC53B]"
          }`}
          onClick={() => {
            setActiveTable("ALL");
          }}
        >
          ALL
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
