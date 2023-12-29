"use client"
import React from "react";
import Typed from "react-typed";

const Banner = () => {
    
  return (
    <div className="bg-[#2C3A47] w-full py-[170px]">
      <div className="max-w-[1250px] mx-auto text-center  text-white">
         <h3 className="text-[25px] md:text-[38px] font-bold">Rohit Sonar</h3>
        <h2 className="text-[25px] md:text-[35px] font-bold italic">'Web Developer'</h2>
        <div className="text-[25px] md:text-[40px] font-bold">
          Expertise
          <Typed
          className="pl-3 italic"
            strings={[
              "fontend Developement",
              "Backend Development",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={60}
          />
        </div>
        <button className="p-1 mx-1 mt-5 rounded bg-gray-500 text-white w-[10%]">Get Start</button>
      </div>
    </div>
  );
};

export default Banner;
