import React from "react";

export default function Button({ title, onClick }) {
    function handleClick() {
    onClick?.();
    }
    
  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 active:translate-y-0 active:shadow-md"
    >
      {title}
    </button>
  );
}