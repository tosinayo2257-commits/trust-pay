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
      className={`${className} flex flex-row items-center bg-[#362FF6] hover:bg-[#000000] cursor-pointer justify-center rounded-[10px]`}
    >
      {content}
    </button>
  );
}

Button.defaultProps = {
  className: "",
  onClick: undefined,
  disabled: false,
  type: "button",
};
