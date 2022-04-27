import "./Square";
import { useState } from "react";
import { Square } from "./Square";

export const Board = (props) => {
  const initializeSquares = () => Array(9).fill(null);

  const [squares, setSquares] = useState(initializeSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const handleClick = (i) => {
    const squaresSlice = squares.slice();
    if (squaresSlice[i]) {
      return;
    }
    squaresSlice[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(squaresSlice);
  };

  return (
    <div>
      <div className="status">Next player: {xIsNext ? "X" : "O"}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
