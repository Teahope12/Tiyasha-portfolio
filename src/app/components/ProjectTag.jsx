import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500 bg-purple-500"
    : "text-[#ADB7BE] border-slate-600";

  return (
    <button
      className={`border-2 px-4 py-2 rounded-full text-sm cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
