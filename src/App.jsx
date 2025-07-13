import React , { useState } from 'react';
import Board from './components/Board';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);


  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],  
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a]
          === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);

  const handleSquareClick = (i) => {
    if (squares[i] || winner) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinningSquares([]);
  };

  const currentPlayer = isXNext ? 'X' : 'O';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
 
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">

         <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Tic-Tac-Toe
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Modern • Responsive • Fun
          </p>
        </div>

        <div className="mb-6 md:mb-8 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg px-6 py-3 border border-gray-700">
            <p className="text-xl md:text-2xl font-semibold">
              Next Player: 
              <span className={`ml-2 ${currentPlayer === 'X' ? 'text-blue-400' : 'text-pink-400'}`}>
                {currentPlayer}
              </span>
            
            </p>
          </div>
        </div>  
        

    
        <div className="mb-8 w-full max-w-md px-4">
                {winner ? (
            <h2
              className={`text-3xl md:text-4xl font-semibold flex justify-center text-center${
                winner === 'X' ? 'text-blue-400' : 'text-pink-400'
              }`}
            >
              {winner} Wins!
            </h2>

          ) : (
         
          <Board 
            squares={squares}
            onSquareClick={handleSquareClick}
    
          />
          )}
        </div>
        

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            New Game
          </button>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-bold text-lg">X</span>
              <span>Player 1</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-pink-400 font-bold text-lg">O</span>
              <span>Player 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;