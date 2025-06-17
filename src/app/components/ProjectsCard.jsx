"use client";
import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ProjectsCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const handleGitClick = () => {
    toast.success("GitHub link opened");
  };

  const handlePreviewClick = () => {
    toast.success("Preview link opened");
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500">

          {/* GitHub Icon */}
          <motion.a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleGitClick("GitHub")}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </motion.a>

          {/* Preview Icon */}
          <motion.a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setTimeout(() => {
                toast.success("GitHub link opened");
              }, 6000);
            }}
            onMouseEnter={() => {
              toast("Click to view on GitHub", {
                icon: "👀",
                duration: 2000,
              });
            }}
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </motion.a>

        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
