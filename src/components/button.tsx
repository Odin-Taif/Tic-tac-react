type props = {
  value?: string;
  onSquareClick: () => void;
};

export function ButtonX({ value, onSquareClick }: props) {
  return (
    <button
      className="py-6 px-8  m-2 bg-gray-100 text-lg hover:bg-gray-200"
      onClick={onSquareClick}
    >
      <span>{value}</span>
    </button>
  );
}
