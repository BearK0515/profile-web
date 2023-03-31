import React from "react";

const SkillIcon = ({ borderColor, textColor, title }) => {
  return (
    <span
      className={` w-auto h-full flex items-center mx-2 p-1 whitespace-nowrap text-sm tracking-widest border-2 rounded-md ${borderColor} ${textColor}`}
    >
      {title}
    </span>
  );
};

export default SkillIcon;
