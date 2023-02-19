import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-slate-800 min-h-screen gap-3 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-green-600 w-28 h-28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 className="text-4xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Thank You!</h2>
      <p>Thank you for your interest!</p>
      <Link to='/'>
        <button className="w-40 py-2 bg-white text-gray-900 rounded-xl hover:rounded-none transition-[border-radius] ">
          Home
        </button>
      </Link>
    </section>
  );
};

export default ThankYou;
