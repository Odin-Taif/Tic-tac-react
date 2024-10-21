import { useState } from "react";
import { ButtonX } from "./components";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i: number) {
    console.log(i);
    const nextSquares = squares.slice(); // with slice we are create a shallow copy of squares array.
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <div className="">
        <ButtonX value={squares[0]} onSquareClick={() => handleClick(0)} />
        <ButtonX value={squares[1]} onSquareClick={() => handleClick(1)} />
        <ButtonX value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="">
        <ButtonX value={squares[3]} onSquareClick={() => handleClick(3)} />
        <ButtonX value={squares[4]} onSquareClick={() => handleClick(4)} />
        <ButtonX value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="">
        <ButtonX value={squares[6]} onSquareClick={() => handleClick(6)} />
        <ButtonX value={squares[7]} onSquareClick={() => handleClick(7)} />
        <ButtonX value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
