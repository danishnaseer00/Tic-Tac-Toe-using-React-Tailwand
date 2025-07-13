import React from "react";
import Square from "./Sqaure";  

const Board = ({ squares, onSquareClick }) => {
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
      />
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-md mx-auto aspect-square">
      {Array(9).fill(null).map((_, i) => renderSquare(i))}
    </div>
  );
};


export default Board;
