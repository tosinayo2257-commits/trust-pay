import React from "react";

export default function Button({
  className = "",
  content,
  onClick,
  disabled = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-[10px] bg-[#362FF6] text-white px-4 py-2 
                  hover:bg-[#03022A] transition-colors duration-200 
                  ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} 
                  ${className}`}
    >
      {content}
    </button>
  );
}
