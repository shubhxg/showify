import { useState } from "react";
import { IMAGE_BASE_URL } from "../constants/constant";

export default function Card({ imgSource, name, rating, isNerdy }) {
  const [hasLiked, setHasLiked] = useState(false);
  
  return (
    <div
      className="cursor-pointer card py-3 px-3 duration-300 ease-out rounded-2xl  hover:bg-[#494871] outline-[#331c5c] outline-1 hover:outline-violet-600 hover:outline-1"
      onClick={() => {
        setCount((prevState) => prevState + 1);
      }}
    >
      <img
        className="object-cover mb-4 rounded-xl w-[250px] h-[200px]"
        src={`${IMAGE_BASE_URL}${imgSource}`}
        alt="Card"
      />
      <h3 className="sm:text-md my-1 font-bold flex">{name}</h3>
      <h5 className="text-md flex">⭐ {Number(rating).toFixed(1)}</h5>
      <div className="flex justify-between">
        <h5 className="text-md mt-2 text-gray-500">
          {isNerdy ? "Nerdy Show" : "Drama/Comedy"}
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
