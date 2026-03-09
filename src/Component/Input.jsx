import React from "react";

export default function Input({
  type,
  id,
  className,
  placeholder,
  value,
  name,
  onChange,
}) {
  return (
    <input
      type={type}
      id={id}
      className={`${className} py-3 px-3 border border-[#FFFFFF33] border-1 rounded-md`}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}
