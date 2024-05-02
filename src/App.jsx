import { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

export default function App() {
  const [color , setColor]=useState("black")
  return (
    <>
    <div  className="bg-black sm:h-full xl:h-screen w-full flex flex-col  items-center pt-10 "
    style={{ backgroundColor: color }}>
    <div>
    <div className="text-[#FFFFFF]  font-extrabold md:text-[29px] sm:text-[20px] ">Turn collaboration into innovation</div>
    </div>
    <div className="text-[#3F83F8] flex  ">

    <div className="sm:text-[15px] md:text-[24px]" >Learn more about inner source </div>
    <div className='pt-[14px] pl-2'>  <FaArrowRight />
    </div>
      </div>
      <div className="flex  md:m-4  md:gap-10 sm:gap-5 sm:flex-col xl:flex-row ">

      <div className=" rounded-lg">
        <img src="/image1.png" alt="error"  />
        <h2 className="text-[#FFFFFF] pt-3 sm:pt-1 " >Build as one team</h2>
        <p className="text-[#9CA3AF] pt-3 sm:pt-1" >Work seamlessly across your <br/>organization on a platform designed for<br/> collaboration.</p>

      </div>
      <div className=" rounded-lg">
        <img src="/image2.png" alt="error"/>
        <h2 className="text-[#FFFFFF] pt-3 sm:pt-1">Transform your culture</h2>
        <p  className="text-[#9CA3AF] pt-3 sm:pt-1">Embrace innersource, iterate faster, and <br/>ship more frequently using best tools<br/> from open source teams.</p>

      </div>
      <div className=" rounded-lg">
        <img src="/image3.png" alt="error" />
        <h2 className="text-[#FFFFFF] pt-3 sm:pt-1" >Learn as you build</h2>
        <p className="text-[#9CA3AF] pt-3 sm:pt-1">Get insight into how your team builds <br/> today with community-backed KPIs.</p>
      </div>
    </div>
    <div className="flex text-[#FFFFFF] gap-x-8  md:mt-5 items-center sm:gap-y-3 sm:flex-col xl:flex-row">
      <div className="flex  rounded-lg border sm:p-2 md:p-4 gap-x-2" onClick={() => setColor("black")}><FaCartPlus  /><p className='text-[10px] ' >Black</p></div>
      <div className="flex  rounded-lg border sm:p-2 md:p-4 gap-x-2" onClick={() => setColor("red")} ><FaCartPlus  /><p className='text-[10px] ' >Red</p></div>
      <div className="flex  rounded-lg border sm:p-2 md:p-4 gap-x-2" onClick={() => setColor("green")}  ><FaCartPlus  /><p className='text-[10px] pt--1' >Green</p></div>
      <div className="flex  rounded-lg border sm:p-2 md:p-4 gap-x-2" onClick={() => setColor("blue")} ><FaCartPlus /><p className='text-[10px] '>Blue</p></div>
    </div>
      </div>
    </>
  )   
}