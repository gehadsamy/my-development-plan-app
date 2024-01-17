import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const AchievementsCollapsible = ({
  title,
  projects,
}: {
  title: any;
  projects: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-2 px-4 bg-gray-700 text-gray-200 bg-opacity-70  rounded-lg hover:bg-gray-600 transition duration-300"
      >
        <h2 className="font-bold text-xl">{title}</h2>
        {isOpen ? (
          <IoIosArrowUp className="text-xl" />
        ) : (
          <IoIosArrowDown className="text-xl" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ scale: 1.03 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.26, ease: "easeInOut" }}
          className="mt-3 bg-gray-800  bg-opacity-80 cursor-pointer rounded-lg p-4 backdrop-filter backdrop-blur-md"
        >
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            {projects.map((project: any, index: number) => (
              <li key={index}>
                <strong>{project.name}</strong> — {project.description}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xl space-y-2 text-gray-200">
            and another projects
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default AchievementsCollapsible;
