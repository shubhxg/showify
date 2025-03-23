import { useState } from "react";
import { IMAGE_BASE_URL } from "../constants/constant";

export default function Card({ movie: { poster_path, title, vote_average, original_language, release_date } }) {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="text-white cursor-pointer p-4 duration-200 ease-in-out rounded-2xl bg-[#19142f] hover:bg-[#3a395a] outline outline-transparent hover:outline-violet-600 hover:scale-110 transform-gpu will-change-transform">
      <img
        className="object-cover mb-4 rounded-xl w-[250px] h-[200px]"
        src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : "/no-movie.png"}
        alt={title}
      />
      <h3 className="sm:text-md my-1 font-bold flex">
        {title.length > 27 ? `${title.substring(0, 27)}...` : title}
      </h3>
      <div className="flex items-center">
        <h6 className="text-sm flex font-medium">
          ⭐ {Number(vote_average).toFixed(1)}
        </h6>
        <span className="mx-1.5 text-gray-500">•</span>
        <h6 className="text-sm flex text-gray-400">
          {`${original_language[0].toUpperCase()}${original_language.slice(1)}`}
        </h6>
        <span className="mx-1.5 text-gray-500">•</span>
        <h6 className="text-sm flex text-gray-400">
          {`${release_date ? release_date.substring(0, 4) : "N/A"}`}
        </h6>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setHasLiked((prevState) => !prevState)}
          className={
            hasLiked
              ? " bg-violet-700 py-2 px-4 mt-4 rounded-xl cursor-pointer"
              : "bg-[#2d1549] py-2 px-4 mt-4 rounded-xl hover:bg-violet-700 cursor-pointer"
          }
        >
          {hasLiked ? "👍 Liked" : "👍"}
        </button>
      </div>
    </div>
  );
}
