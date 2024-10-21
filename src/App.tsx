import { ButtonX } from "./components";

export default function Board() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <div className="">
        <ButtonX val={1} />
        <ButtonX val={2} />
        <ButtonX val={3} />
      </div>
      <div className="">
        <ButtonX val={4} />
        <ButtonX val={5} />
        <ButtonX val={6} />
      </div>
      <div className="">
        <ButtonX val={7} />
        <ButtonX val={8} />
        <ButtonX val={9} />
      </div>
    </div>
  );
}
