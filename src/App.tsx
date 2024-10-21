import { useState } from "react";
import Board from "./components/Board";
import RestButton from "./components/RestButton";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // console.log(history, "history");
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  // console.log(currentSquares, "cuurentSquares");

  function handlePlay(nextSquares: unknown[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setHistory([...history, nextSquares]);
    // TODO
  }
  function resetGame() {
    setCurrentMove(0);
    setHistory([Array(9).fill(null)]);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // TODO
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          className="m-2 p-2 w-full flex items-center justify-center bg-green-400 hover:bg-gray-300"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="h-screen">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

      <RestButton resetGame={resetGame} />

      <div className="">
        <ol className="flex flex-col w-full">{moves}</ol>
      </div>
    </div>
  );
}
