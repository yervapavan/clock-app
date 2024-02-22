import React, { useRef, useState } from 'react';


function Clock() {
  const dialogRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = () => {
    dialogRef.current.showModal(); // Display the dialog
    setIsOpen(true);
  };

  // Close the dialog
  const handleClose = () => {
    dialogRef.current.close(); // Hide the dialog
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <div className={`bg-[#ffffff] w-full h-screen  pt-8 ${isOpen ? 'blur-md' : ''} `}>
        <div className='flex justify-center mt-5'>
          <button className='text-[32px] bg-blue-600 h-[50px] w-[50px] rounded-full hover:bg-blue-900 hover:text-blue-100' onClick={handleAdd}>+</button>
        </div>
        <div>
          
        </div>
      </div>
      <dialog ref={dialogRef} className={`fixed inset-0 flex justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
        <div className='w-[60vw] h-[145px] md:w-[30vw] border-2 border-black rounded-md p-2 flex flex-col'>
          <div className='flex justify-around items-center h-full'>
            <input type='number' min={1} max={12} className='border-2 border-black rounded-sm w-[20%]'/>
            <input type='number' min={1} max={12} className='border-2 border-black rounded-sm w-[20%]'/>
            <input type='number' min={1} max={12} className='border-2 border-black rounded-sm w-[20%]'/>
            <div className='flex flex-col w-[15%] justify-around h-[60%]'>
              <button className='bg-[#444444] border-black border-2 text-[#eeeeee] rounded-sm hover:bg-black focus:bg-black' >AM</button>
              <button className='bg-[#444444] border-black border-2 text-[#eeeeee] rounded-sm hover:bg-black focus:bg-black' >PM</button>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='border-black border-2 w-[15%]  mr-4 rounded-sm bg-[#444444] text-[#eeeeee] hover:bg-black focus:bg-black' onClick={handleClose}>Done</button>
            <button className='border-black border-2 w-[15%] rounded-sm bg-[#444444] text-[#eeeeee] hover:bg-black focus:bg-black' onClick={handleClose}>Close</button>
          </div>
        </div>

      </dialog>
      
    </div>
  );
}

export default Clock;
