import React from 'react'

export default function Header() {
  return (
    <header className="max-w-full mt-24 flex flex-col items-center text-center">
      <img src="/hero.png" alt="Hero Banner Image" className="sm:w-92 w-54" />
      <h1 className="sm:mt-2 sm:text-4xl text-3xl tracking-tighter font-bold">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-violet-500 to-red-400 bg-clip-text text-transparent animate-gradient-text">
          Showify!
        </span>
      </h1>
      <h6 className="mt-2 sm:text-md px-4 font-regular text-gray-300">
        Find your next watch recommendation based on what you last watched.
      </h6>
      <br />
    </header>
  );
}