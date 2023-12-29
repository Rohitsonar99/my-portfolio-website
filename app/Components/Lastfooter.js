import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";

export const Lastfooter = () => {
 
  return (
    <>
      <div className="bg-pink-300 py-[80px] ">
        <div className="m-14 grid grid-cols-2 gap-8">

          <div className="h-[150px] md:h-[200px]">
            <h1 className="flex justify-center text-[30px] font-semibold">
              My Social Sites
            </h1>
            <span className="text-[10px] md:text-[16px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              iste similique consequatur nesciunt adipisci id aut numquam esse
              repellendus cupiditate vel a, possimus eaque autem magni
              accusantium delectus explicabo ipsam impedit, ab qui?
            </span>
            
            <div className="flex justify-between w-[30%] md:w-[75%] m-8 ">
              <Link href='https://www.facebook.com/'><FaFacebookSquare className='hover:scale-90 duration-100' size={30} /></Link>
              <Link href='https://www.instagram.com/'><FaInstagram className='hover:scale-90 duration-100' size={30} /></Link>
              <Link href='https://www.Twitter.com/'><FaTwitterSquare className='hover:scale-90 duration-100' size={30} /></Link>
              <Link href='https://www.Github.com/'><FaGithubSquare className='hover:scale-90 duration-100' size={30} /></Link>
            </div>
            
          </div>
          <div className="flex row-auto justify-between text-gray-800">
            <ul>
              <li className="font-bold text-[10px] md:text-xl ">Solution</li>
              <li className="m-2 hover:scale-90 duration-100 font-semibold">Analyst</li>
              <li className="m-2 hover:scale-90 duration-100 font-semibold">commerce</li>
              <li className="m-2 hover:scale-90 duration-100 font-semibold">insights</li>
            </ul>

            <ul>
              <li className="font-bold text-[10px] md:text-xl">Support</li>
              <li className="m-2 hover:scale-90 duration-100 font-semibold">pricing</li>
              <li className="m-2 hover:scale-90 duration-100 font-semibold">guidance</li>
              <li className="m-2 hover:scale-90 duration-100 font-semibold">API status</li>
            </ul>

            <ul>
              <li className="font-bold text-[10px] md:text-xl">Company</li>
              <li className="m-2 hover:scale-90 duration-100 font-semibold">blog</li>
              <li className="m-2 hover:scale-90 duration-100 font-semibold">jobs</li>
              <li className="m-2 hover:scale-90 duration-100 font-semibold">press</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
