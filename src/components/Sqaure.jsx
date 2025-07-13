
import React, { useState } from 'react';

// Square Component
const Square = ({ value, onClick, isWinning = false }) => {
  return (
    <button
      className={`
        w-full h-full bg-gray-800 border-2 border-gray-600 
        hover:bg-gray-700 hover:border-purple-500 
        transition-all duration-300 ease-in-out
        text-4xl md:text-5xl lg:text-6xl font-bold
        focus:outline-none focus:ring-2 focus:ring-purple-500
        ${isWinning ? 'bg-green-600 border-green-400' : ''}
        ${value === 'X' ? 'text-blue-400' : 'text-pink-400'}
        active:scale-95 transform
      `}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square