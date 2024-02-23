import React, { useRef, useState } from 'react';
import AlarmSetter from './AlarmSetter';

function Clock() {
  const dialogRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption,setselectedOption]=useState('AM');
  const [label,setLabel]=useState("alarm");
  const [alarms,setAlarms]=useState([]);
  const [hours,setHours]=useState(0);
  const [minutes,setMinutes]=useState(0);
  const [seconds,setSeconds]=useState(0);
  const [id,setId]=useState(0);

  const handleOptionChange=(event)=>{
    setselectedOption(event.currentTarget.value);
  }

  const handleAdd = () => {
    dialogRef.current.showModal(); // Display the dialog
    setIsOpen(true);
  };

  // Close the dialog
  const handleDone=()=>{
    setAlarms([...alarms,{
          "hours":parseInt(hours),
          "minutes":parseInt(minutes),
          "seconds":parseInt(seconds),
          "selectedoption":selectedOption,
          "label":label,
          "id":id,
    }])
    setId(id+1);
    dialogRef.current.close(); // Hide the dialog
    setIsOpen(false);
  }
  const handleClose = () => {
    dialogRef.current.close(); // Hide the dialog
    setIsOpen(false);
  };
  const handleAlarmNameChange=(event)=>{
    setLabel(event.currentTarget.value);
  }
  return (
    <div className='relative'>
      <div className={`bg-[#ffffff] w-full h-screen  pt-8 ${isOpen ? 'blur-sm' : ''} `}>
        <div className='flex justify-center items-center mt-5'>
          <button className='text-[32px] bg-blue-600 h-[50px] w-[50px] rounded-full hover:bg-blue-900 hover:text-blue-100 text-white' onClick={handleAdd}>+</button>
        </div>
        <div>
        <AlarmSetter alarms={alarms}/>
        </div>
      </div>
      <dialog ref={dialogRef} className={`fixed inset-0 flex justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
        <div className='w-[60vw] h-[150px] md:w-[30vw] border-2 border-black rounded-md p-2 flex flex-col'>
          <div className='flex justify-around items-center h-full'>
            <input type='number' min={1} max={12} className='border-2 border-black rounded-sm w-[20%] ' onChange={(e)=>setHours(e.target.value)}/>
            <input type='number' min={0} max={60} className='border-2 border-black rounded-sm w-[20%]'  onChange={(e)=>setMinutes(e.target.value)}/>
            <input type='number' min={0} max={60} className='border-2 border-black rounded-sm w-[20%]'  onChange={(e)=>setSeconds(e.target.value)}/>
            <div className='flex flex-col w-[15%] justify-around h-[60%]'>
              <div className='flex'><input type='radio' name='am-pm' className='mr-1' value={'AM'} checked={selectedOption==='AM'} onChange={handleOptionChange} /><label className='font-semibold'>AM</label></div>
              <div className='flex'><input type='radio' name='am-pm' className='mr-1' value={'PM'} checked={selectedOption==='PM'} onChange={handleOptionChange}/><label className='font-semibold'>PM</label></div>
            </div>
          </div>
          <div>
            <label htmlFor='alarm' className='text-md font-medium '>Alarm name </label>
            <input type='text' id='alarm' placeholder='Enter' onChange={handleAlarmNameChange}  className='border-2 border-black mb-1 pl-2 rounded-sm'/>
          </div>
          <div className='flex justify-center'>
            <button className='border-black border-2 w-[15%]  mr-4 rounded-sm bg-[#444444] text-[#eeeeee] hover:bg-black focus:bg-black' onClick={handleDone}>Done</button>
            <button className='border-black border-2 w-[15%] rounded-sm bg-[#444444] text-[#eeeeee] hover:bg-black focus:bg-black' onClick={handleClose}>Close</button>
          </div>
        </div>

      </dialog>
      
    </div>
  );
}

export default Clock;
