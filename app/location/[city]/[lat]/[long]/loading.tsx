import { SunIcon } from "@heroicons/react/20/solid";

function Loading() {
  return (
    <div
      className="bg-gradient-to-br from-[#1c4693] to-[#286ad5] min-h-screen flex flex-col items-center
      justify-center text-slate-200"
    >
      <SunIcon
        className="animate-spin h-24 w-24 text-yellow-500"
        color="yellow"
      />

      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading City Weather Information
      </h1>

      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on, we are crunching the numbers and generating a summary for you!
      </h2>
    </div>
  );
}

export default Loading;
