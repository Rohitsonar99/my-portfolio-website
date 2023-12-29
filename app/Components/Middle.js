"use client";
import React from "react";

export const Middle = () => {
  return (
    <>
      <div className="max-w-[1240px] p-2 mx-auto my-40 md:grid grid-cols-2 ">
        <div className="col-span-1 w-[80%]">
          <img src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <h1 className="font-semibold mx-1 my-2">Learn from experts</h1>
          <p className="my-2 mx-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet
            saepe soluta nostrum pariatur esse dolore cupiditate, deserunt
            nesciunt nemo obcaecati sunt mollitia magnam, illum nobis, facere
            vitae omnis praesentium!
          </p>
          <button className="p-1 mx-1 rounded bg-black text-white w-[20%]">
            Get Start
          </button>
        </div>
      </div>
    </>
  );
};
