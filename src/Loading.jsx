import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#1c1c1c]">
      <div className="load w-[150px] h-[150px] border-blue-400 border-[8px] border-solid border-b-0 border-l-0 rounded-full"></div>
    </div>
  );
};

export default Loading;
