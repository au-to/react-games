import Square from "./components/Square";
import { useState } from 'react';

export default function Board () {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = () => {
    const nextSquares = squares.slice();
    nextSquares[0] = 'X';
    setSquares(nextSquares)
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  )
}
