import { ButtonX } from "./components";
import { calculateWinner } from "./lib/functionalcore";

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice(); // with slice we are create a shallow copy of squares array.
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  function resetGame() {
    // setSquares(Array(9).fill(null));
  }

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-3/5 bg-green-300">
        <div className="flex items-center justify-center">
          <ButtonX value={squares[0]} onSquareClick={() => handleClick(0)} />
          <ButtonX value={squares[1]} onSquareClick={() => handleClick(1)} />
          <ButtonX value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex items-center justify-center">
          <ButtonX value={squares[3]} onSquareClick={() => handleClick(3)} />
          <ButtonX value={squares[4]} onSquareClick={() => handleClick(4)} />
          <ButtonX value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex items-center justify-center">
          <ButtonX value={squares[6]} onSquareClick={() => handleClick(6)} />
          <ButtonX value={squares[7]} onSquareClick={() => handleClick(7)} />
          <ButtonX value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div
        className={`p-5 text-lg flex flex-col items-center justify-center space-y-3 w-full ${
          winner ? "bg-green-200" : "bg-orange-200"
        }`}
      >
        <span className="text-xl text-black"> {status} </span>
        <span className="text-xl text-black">
          {winner ? `Winner: ${winner} ` : "No winner yet "}
        </span>
        <button
          className="bg-red-400 p-4 hover:bg-red-500"
          onClick={() => resetGame()}
        >
          ResetGame
        </button>
      </div>
    </div>
  );
}
