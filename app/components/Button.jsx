import React from "react";

const Button = ({ title, handlePress, background }) => {
  return (
    <button
      type="button"
      onClick={handlePress}
      className={`text-[20px] hover:opacity-90 rounded-md h-[65px] ${background} w-[200px] font-Lato font-bold text-white`}
    >
      {title}
    </button>
  );
};

export default Button;
