import React from "react";

export default function Search ({searchTerm, setSearchTerm}) {
    return (
      <div className="sticky top-4 z-10 mb-24 sm:w-xl rounded-full bg-[#241238] px-4 flex justify-start items-center focus-within:ring-1 focus-within:ring-[#9e7bff]">
        <div>
          <img src="/search.svg" className="w-4 mr-2" alt="search icon" />
        </div>
        <input
          type="text"
          placeholder="Search through thousands of tv shows and movies..."
          className="sm:w-xl py-2.5 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
}