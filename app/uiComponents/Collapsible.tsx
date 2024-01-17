import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Collapsible = ({ title, children }: { title: any; children: any }) => {
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-3 bg-gray-800 bg-opacity-70 rounded-lg p-3 backdrop-filter backdrop-blur-md"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Collapsible;
