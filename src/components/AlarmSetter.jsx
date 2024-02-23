import React, { useEffect } from 'react';

function AlarmSetter({ alarms }) {
  useEffect(() => {
    alarms.forEach((alarm) => {
      const { hours, minutes, seconds, selectedoption, id } = alarm;
      const now = new Date();
      const alarmTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        selectedoption === 'AM' ? hours : hours + 12, // Convert to 24-hour format if PM
        minutes,
        seconds
      );

      const timeDifference = alarmTime - now;
      if (timeDifference > 0) {
        setTimeout(() => {
          console.log(`Alarm ${id}: Time's up!`);
          // Your logic to trigger the alarm (e.g., play a sound, show a notification)
        }, timeDifference);
      }
    });
  }, [alarms.map(alarm => alarm.id)]);

  return (
    <div className='flex justify-center mt-7'>
      <ul className='w-[20%]'>
        {alarms.map((alarm) => (
          <li key={alarm.id} className='w-full border-2 border-black mb-2 pl-4 text-2xl rounded-xl font-medium'>
            <div>{alarm.hours}:{alarm.minutes} {alarm.selectedoption}</div>
            <div>{alarm.label} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlarmSetter;
