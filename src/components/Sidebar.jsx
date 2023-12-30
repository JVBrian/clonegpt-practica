import React from "react";
import { questions } from "../data";

const Sidebar = () => {
  return (
    <div className="bg-black flex flex-col items-start p-4 h-screen">
      <div onClick={() => window.location.reload()} className="flex items-center w-full p-1 rounded-lg hover:bg-[#202123]">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-[#ececf1] rounded-full p-1 h-8 w-8">
            <img src="/images/asset 12.svg" alt="logo" />
          </div>
          <h2 className="text-[#ececf1] font-semibold"> Nuevo chat</h2>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <p className="text-[#666666] text-sm mt-12">Hoy</p>
          <div className="text-[#ececf1] text-sm space-y-4 mt-4 w-full">
            {questions.map((q, index) => (
              <div
                key={index}
                className="p-1 w-full rounded-lg cursor-pointer hover:bg-[#202123]"
              >
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-[#ececf1] rounded-full p-1 h-8 w-8">
            <img src="/images/asset 7.svg" alt="img" />
          </div>

          <div className="text-[#ececf1]">
            <p className="font-bold text-sm">Upgrade</p>
            <p className="text-sm">DALL-E</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/images/asset 0.jpg"
            alt="account"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-[#ececf1]">JVBrian</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
