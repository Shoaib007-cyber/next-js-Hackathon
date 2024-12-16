import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";

const BlogPage = () => {
  return (
    <div>
      <div className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-64 w-full mt-[120px]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 flex justify-center items-center h-full flex-col gap-8">
          <div className="w-[120px] h-[150px] flex flex-col items-center">
            <div className="w-[85px] h-[85px]">
              <Image
                src="/mlogo.png"
                alt="logo"
                width={120}
                height={120}
              />
            </div>
            <div className="w-[120px] h-[80px] absolute top-32">
              <h1 className="text-[40px] lowercase">Blog</h1>
            </div>
          </div>

          <div className="absolute top-52 flex-nowrap bg-blue-900 w-64 text-nowrap">
            <ul className="flex flex-col sm:flex-row items-center justify-center w-full px-0 sm:w-auto sm:space-y-0 sm:ml-[60px] md:ml-[110px]">
              <li className="w-[50px] sm:w-[90px] h-[28px] mx-[7px] sm:mx-[12px] text-center flex items-center gap-3">
                Home
                <span className='px-1'>
                  <IoIosArrowForward className="w-[18px] h-[18px]" />
                </span>
              </li>
              <li className="w-[50px] sm:w-[90px] h-[28px] sm:mx-[12px] text-center flex items-center">
                Blog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;