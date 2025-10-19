import React from "react";

const Button = ({ title, handlePress, background }) => {
  return (
    <button
      type="button"
      onClick={handlePress}
      className={`text-[20px] hover:opacity-90 rounded-md h-[65px] ${background} sm:w-[200px] w-[150px] font-Lato font-bold text-white`}
    >
      {title}
    </button>
  );
};

export default Button;
