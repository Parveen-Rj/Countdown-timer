"use client";
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setIsRunning(true);
    }
  };

 


  return(
    <div className='flex flex-col mai-h-screen items-center
    justify-center bg-gradient-to-br from-black to-grey'>

<img src="/public/bg-image.jpg"
 alt=""
 className='absolute top-4xl right-4 h-auto w-40'
/>

<h1 className='text-4xl font-extrabold uppercase mb-6'>
  <span className="text-orange-500"> CountdownTimer</span>
</h1>

<input
type='number'
className='border-2 border-grey-400 bg-transparent p-3 mb-6
text-sky-400 text-xl rounded'
placeholder='Enter Time In Second'
value={time > 0 ? time : ""}
onChange={(e) => setTime(Number(e.target.value))}
/>

<div className='text-3xl font-semibold uppercase mb-6
text-white'>
  {remainingTime} seconds remaning

</div>

<div>
<button onClick={handleStart}
  className="text-white px-8 py-4 rounded-lg font-normal
   bg-gradient-to-r from-blue-500 to-teal-500
   hover:from-blue-600 hover:to-teal-600"> 
   Start
  </button>  

  <button onClick={handleStart}
  className="text-white px-8 py-4 rounded-lg font-normal
   bg-gradient-to-r from-yellow-500 to-orange-500
   hover:from-yellow-600 hover:to-orange-600"> 
   Pause
  </button>
  <button onClick={handleStart}
  className="text-white px-8 py-4 rounded-lg font-normal
   bg-gradient-to-r from-red-500 to-pink-500
   hover:from-red-600 hover:to-pink-600"> 
   Reset
  </button>
  <footer className='mt-10 text-black text-lg'>
Under the supervision of Parveen Malik
  </footer>
</div>




    </div>
  )
}
export default CountdownTimer;

