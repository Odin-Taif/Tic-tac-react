import { useState } from "react";

type props = {
  val: number;
};
export function ButtonX({ val }: props) {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue("x");
  }
  return (
    <button
      className="py-6 px-8  m-2 bg-gray-100 text-lg hover:bg-gray-200"
      onClick={handleClick}
    >
      <span>{value}</span>
    </button>
  );
}
