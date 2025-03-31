import { IMAGE_BASE_URL } from "../constants/constant";

export default function Card({ movie: { poster_path, title, vote_average, original_language, release_date } }) {
  return (
    <div className=" relative text-white cursor-pointer relative duration-200 ease-in-out rounded-xl outline-4 outline-transparent hover:outline-violet-600 hover:scale-105 transform-gpu will-change-transform">
      <img
        className="object-top object-cover rounded-xl w-[220px] h-full"
        src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : "/no-movie.png"}
        alt={title}
      />
      <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/90 to-transparent rounded-b-xl">
        <h3 className="text-lg font-bold mb-2">
          {title.length > 27 ? `${title.substring(0, 27)}...` : title}
        </h3>
        <div className="flex items-center gap-1.5 text-sm">
          <span className="font-medium flex items-center">
            ⭐ {Number(vote_average).toFixed(1)}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-300">
            {`${original_language[0].toUpperCase()}${original_language.slice(
              1
            )}`}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-300">
            {`${release_date ? release_date.substring(0, 4) : "N/A"}`}
          </span>
        </div>
      </div>
    </div>
  );
}
