type props = {
  value?: string;
  onSquareClick: () => void;
};

export function ButtonX({ value, onSquareClick }: props) {
  return (
    <button
      className="py-6 px-8 w-24 h-24 m-2 bg-gray-100 text-lg hover:bg-gray-200 focus:outline-none"
      onClick={onSquareClick}
    >
      <span className="w-full h-full flex items-center justify-center">
        {value}
      </span>
    </button>
  );
}
