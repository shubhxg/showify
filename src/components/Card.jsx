import { useState } from "react";
import { IMAGE_BASE_URL } from "../constants/constant";

export default function Card({ imgSource, name, rating, isNerdy }) {
  const [hasLiked, setHasLiked] = useState(false);
  
  return (
    <div className="cursor-pointer py-3 px-3 duration-200 ease-in-out rounded-2xl bg-[#19142f] hover:bg-[#3a395a] hover:outline-violet-600 hover:outline-1 hover:scale-110 transform-gpu will-change-transform">
      <img
        className="object-cover mb-4 rounded-xl w-[250px] h-[200px]"
        src={`${IMAGE_BASE_URL}${imgSource}`}
        alt="Card"
      />
      <h3 className="sm:text-md my-1 font-bold flex">
        {name.length > 27 ? `${name.substring(0, 27)}...` : name}
      </h3>
      <h6 className="text-sm flex font-medium">
        ⭐ {Number(rating).toFixed(1)}
      </h6>
      <div className="flex justify-between">
        <h6 className="text-md mt-2 text-gray-500">
          {isNerdy ? "Nerdy Show" : "Drama/Comedy"}
        </h6>
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
