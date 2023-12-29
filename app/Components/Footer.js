"use client";
import React from "react";
export const Footer = () => {
  return (
    <>
      <div className=" bg-gray-600 py-[100px]">
        <div className="max-w-[1240px] mx-10 grid grid-cols-3 gap-5">

          <div className="shadow-2xl h-[300px] md:h-[500px] hover:scale-110 duration-500 ">
            <h1 className="flex justify-center text-[15px] md:text-2xl font-bold text-white blur-[0.5px]">
              First Container
            </h1>
            <p className="text-white text-[8px] md:text-[20px] m-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui
              ipsum. Eveniet, veniam ex quaerat unde adipisci nam, alias aut
              facilis quibusdam repellat minima est, aperiam autem culpa vel
              repudiandae?
            </p>
            <button className=" bg-black text-white p-0 md:p-2 rounded ml-6">
              Get started
            </button>
          </div>

          <div className="shadow-2xl  h-[300px] md:h-[500px] hover:scale-110 duration-500 bg-slate-500">
            <h1 className="flex justify-center text-[15px] md:text-2xl font-bold text-white blur-[0.5px]">
              Second Container
            </h1>
            <p className="text-white text-[8px] md:text-[20px] m-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui
              ipsum. Eveniet, veniam ex quaerat unde adipisci nam, alias aut
              facilis quibusdam repellat minima est, aperiam autem culpa vel
              repudiandae?
            </p>
            <button className=" bg-black text-white p-0 md:p-2 rounded ml-6">
              Get started
            </button>
          </div>

          <div className="shadow-2xl h-[300px] md:h-[500px] hover:scale-110 duration-500">
            <h1 className="flex justify-center text-[15px] md:text-2xl font-bold text-white blur-[0.5px]">
              Third Container
            </h1>
            <p className="text-white text-[8px] md:text-[20px] m-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui
              ipsum. Eveniet, veniam ex quaerat unde adipisci nam, alias aut
              facilis quibusdam repellat minima est, aperiam autem culpa vel
              repudiandae?
            </p>
            <button className=" bg-black text-white p-0 md:p-2 rounded ml-6">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
