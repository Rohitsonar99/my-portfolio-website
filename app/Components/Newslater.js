"use client";
import React from "react";

const Newslater = () => {
  return (
   
      <div className="bg-gray-400 py-[140px]">
        <div className="max-w-[1240px] mx-auto lg:flex justify-between ">
          <div >
            <h1 className="lg:text-[40px] font-bold text-white">Want to learn latest I.T skills?</h1>
            <span className="text-white font-semibold">Sign up to our page for more details</span>
          </div>
          <div>
            <input className="p-3 mx-2 text-slate-600" type="text" placeholder="Email"/>
         
            <button className="bg-black text-white p-3 mr-14 mt-4 ronded rounded-md">Get started</button>
          </div>
        </div>
      </div>
    
  );
};

export default Newslater;
