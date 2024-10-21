type props = {
  resetGame: () => void;
};

export default function RestButton({ resetGame }: props) {
  return (
    <div className="flex items-center justify-end">
      <button
        className="p-3 m-3 bg-red-500 text-white hover:bg-red-800"
        onClick={() => resetGame()}
      >
        Reset Game
      </button>
    </div>
  );
}
