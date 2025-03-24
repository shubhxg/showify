import React from 'react'

export default function Header() {
  return (
    <header className="max-w-full mt-12 flex flex-col items-center text-center">
      <img src="/hero.png" alt="Hero Banner Image" className="sm:w-92 w-54" />
      <h1 className="sm:mt-2 sm:text-4xl text-2xl tracking-tighter font-bold sm:w-2xl sm:leading-12 sm:text-wrap-balance">
        Find Your {""}
        <span className="bg-gradient-to-r from-violet-500 to-red-400 bg-clip-text text-transparent animate-gradient-text">
          Next Watch Recommendation{" "}
        </span>
        based on what you Last Watched.{" "}
      </h1>
      <br />
    </header>
  );
}