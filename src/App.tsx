import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // console.log(history, "history");
  const currentSquares = history[history.length - 1];
  // console.log(currentSquares, "cuurentSquares");

  function handlePlay(nextSquares: unknown[]) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
    // TODO
  }
  function resetGame() {
    setHistory([Array(9).fill(null)]);
    // setSquares(Array(9).fill(null));
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          resetGame={resetGame}
        />
      </div>

      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
