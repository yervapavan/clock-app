import React from 'react'
import { useState,useRef } from 'react'
function StopWatch() {
  const [elapsedTime,setelapsedTime]=useState(0);
  const intervalRef=useRef(null);
  const start=()=>{
      intervalRef.current=setInterval(()=>{
          setelapsedTime((prev)=>prev+10);
      },10)
  }

  const stop=()=>{
    clearInterval(intervalRef.current);
  }

  const reset=()=>{
    clearInterval(intervalRef.current);
    setelapsedTime(0);
  }

  const formatTime=(milliseconds)=>{
      const hours=Math.floor(milliseconds/(1000*60*60));
      const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
      const centiseconds = Math.floor((milliseconds % 1000) / 10);
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  }
  return (
    <>
       <div className='flex justify-center'>
        <div className='md:w-[25vw] text-center mt-10 mb-5 border-2 border-black text-lg md:text-[46px] rounded-md flex justify-center items-center pt-5 pb-5'>
        {formatTime(elapsedTime)}
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='border-2 border-black pl-2 pr-2 mr-3 font-medium bg-[#334433] text-[#eeeeee] hover:bg-black hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-black' onClick={start}>start</button>
        <button className='border-2 border-black pl-2 pr-2 mr-3 font-medium bg-[#334433] text-[#eeeeee] hover:bg-black hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-black' onClick={stop}>stop</button>
        <button className='border-2 border-black pl-2 pr-2 font-medium bg-[#334433] text-[#eeeeee] hover:bg-black hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-black' onClick={reset}>reset</button>
      </div> 
    </>
  )
}

export default StopWatch