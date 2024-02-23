import React from 'react'
import { useState,useEffect } from 'react';
function WorldClock() {
  const [date,setDate]=useState(new Date());
  const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  useEffect(()=>{
    const interval=setInterval(
      ()=>{
        setDate(new Date());
      },
    1000,[])
    return () => clearInterval(interval);
  })
  return (
    <>
    <div className='flex justify-center'>
    <div className='flex border-2 border-black justify-evenly mt-10 w-[35vw] rounded-sm'>
    <div className='md:h-[15vh] h-[50px] flex justify-center items-center text-[25px] md:text-[70px]'>
  {date.getHours() > 12 ? 
    (date.getHours() - 12 < 10 ? "0" + (date.getHours() - 12).toString() : (date.getHours() - 12).toString()) :
    date.getHours().toString()}
</div>
      <div className='md:h-[15vh] h-[50px] flex justify-center items-center text-[25px] md:text-[70px]'>{date.getMinutes()}</div>
      <div className='md:h-[15vh] h-[50px] flex justify-center items-center text-[25px] md:text-[70px]'>{date.getSeconds()<10?'0'+(date.getSeconds()):date.getSeconds()}</div>
      <div className='md:h-[15vh] h-[50px] flex justify-center items-end text-[15px] md:text-[45px]'>{date.getHours()<12?'AM':'PM'}</div>
    </div>
    </div>
    <div className='flex justify-center mt-5 font-medium text-xl'>
      <div>India Standard Time | {shortDays[date.getDay()]},{date.getDate()}</div>
    </div>
    </>
  )
}

export default WorldClock