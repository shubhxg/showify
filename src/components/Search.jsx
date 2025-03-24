import React from "react";

export default function Search ({searchTerm, setSearchTerm}) {
    return (
      <div className="sticky top-4 z-10 sm:mb-16 mb-8 sm:w-xl rounded-full bg-[#291540]/80 backdrop-blur-sm outline-1 outline-[#543770] px-4 flex justify-start items-center focus-within:ring-2 focus-within:ring-[#9e7bff]">
        <div>
          <img src="/search.svg" className="w-4 mr-2" alt="search icon" />
        </div>
        <input
          type="text"
          placeholder="Search through thousands of movies..."
          className="sm:w-xl w-54 py-2 sm:py-3 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
}