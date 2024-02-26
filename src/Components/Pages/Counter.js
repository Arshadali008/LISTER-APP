import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAuto, setIsAuto] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isAuto) {
      intervalId = setInterval(() => {
        setCount((prevCount) => (isReversed ? prevCount - 1 : prevCount + 1));
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAuto, isReversed]);

  const handleStart = (direction) => {
    setIsAuto(true);
    setIsReversed(direction === 'negative');
  };

  const handleStop = () => {
    setIsAuto(false);
  };

  const handleClear = () => {
    setCount(0);
  };

  return (
    <div className=' bg-blue-400 p-2'>
      <header className='flex justify-between pb-6 pt-2'>
        <h1 className='text-3xl font-bold text-white'>AsimCart</h1>
        <button className='px-3 py-1 bg-gray-800 rounded text-white'>
          <Link to='/'>Products</Link>
        </button>
      </header>
    <div className="flex items-center justify-center bg-white h-screen">
      <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Auto Counter App</h1>
        <p className="text-xl mb-4">Count: {count}</p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleStart('positive')}
          >
            Positive Counting
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleStart('negative')}
          >
            Negative Counting
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      </div>
      <footer className='w-full rounded-xl bg-blue-400'>
        <div className=''>
          <div className=' flex justify-center p-20 align-middle'>
              <h3>Copyright © 2024 Designed by Arshad Ali</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Counter;