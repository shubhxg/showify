import { useState, useEffect } from "react";

export default function Card({ imgSource, name, rating, isNerdy }) {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`Card been rendered!`);
  }, [hasLiked]);

  return (
    <div
      className="cursor-pointer card py-3 px-3 ease-out duration-200 rounded-2xl bg-[#282346] hover:bg-[#494871] outline-violet-900 outline-1 hover:outline-violet-600 hover:outline-1"
      onClick={() => {
        setCount((prevState) => prevState + 1);
      }}
    >
      <img
        className="object-cover mb-4 rounded-xl w-[280px] h-[250px]"
        src={imgSource}
        alt="Card"
      />
      <h3 className="text-2xl my-1 font-bold flex">{name}</h3>
      <h5 className="text-md flex">⭐ {rating}</h5>
      <div className="flex justify-between">
        <h5 className="text-md mt-2 text-gray-500">
          {isNerdy ? "Nerdy Show" : "Drama/Comedy"} {count || null}
        </h5>
        <button
          onClick={() => setHasLiked((prevState) => !prevState)}
          className={
            hasLiked
              ? "text-md ease-in-out duration-300 bg-violet-700 py-2 px-5 mt-2 rounded-md cursor-pointer"
              : "text-md bg-[#431e6d] py-2 px-5 mt-2 rounded-md ease-in-out duration-300 hover:bg-violet-700 cursor-pointer"
          }
        >
          {hasLiked ? "❤️ Liked" : "🤍"}
        </button>
      </div>
    </div>
  );
}
