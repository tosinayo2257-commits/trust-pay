// StepCard.jsx
import React from "react";

const StepCard = ({ step, title, description, buttonText, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 border">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-blue-600">{step}</span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        {buttonText}
      </button>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default StepCard;
