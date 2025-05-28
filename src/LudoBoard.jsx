import React, { useState } from 'react';

const LudoBoard = () => {
  const [moves, setMoves] = useState({ Blue: 0, Yellow: 0, Green: 0, Red: 0 });

  const updateMove = (color) => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      [color]: prevMoves[color] + 1,
    }));
  };

  const buttonStyles = {
    Blue: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300',
    Yellow: 'bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300',
    Green: 'bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300',
    Red: 'bg-red-600 text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300',
  };

  const borderColors = {
    Blue: 'border-blue-400',
    Yellow: 'border-yellow-300',
    Green: 'border-green-400',
    Red: 'border-red-400',
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-100 via-sky-200 to-purple-200 p-6">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 drop-shadow-lg">🎲 Game Begins!</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-10 rounded-3xl shadow-2xl">
        {['Blue', 'Yellow', 'Green', 'Red'].map((color) => (
          <div
            key={color}
            className={`flex flex-col items-center space-y-4 border-2 p-4 rounded-xl shadow-md ${borderColors[color]}`}
          >
            <p className="text-lg font-medium text-gray-800">
              {color} Moves: <span className="font-bold">{moves[color]}</span>
            </p>
            <button
              className={`w-24 py-2 rounded-xl font-semibold transition-transform transform active:scale-95 focus:outline-none ${buttonStyles[color]}`}
              onClick={() => updateMove(color)}
            >
              +1
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LudoBoard;
