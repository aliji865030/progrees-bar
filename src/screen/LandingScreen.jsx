import React, { useState, useEffect } from 'react';

const LandingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setStatus('Complete');
        clearInterval(interval);
      }
    }, 100); // Adjust the interval as needed for smoother animation

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className='flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-2xl'>Progress Bar</h1>
        </div>

    <div className="progress-bar w-7/12 rounded-2xl overflow-hidden border border-black my-5">
      <div
        className="progress-bar-fill text-white "
        style={{ width: `${progress}%`,backgroundColor:"green" }}
      >
        {status === 'Loading' ? `${progress}%` : status}
      </div>
    </div>
    </div>
  );
};




export default LandingScreen;
