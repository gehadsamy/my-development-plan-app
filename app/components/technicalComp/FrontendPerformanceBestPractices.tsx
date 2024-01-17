/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import Card from "../Card";
import { motion } from "framer-motion";

const FrontendPerformanceBestPractices = () => {
  return (
    <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileHover={{ scale: 1.03 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    className="max-w-4xl mx-auto cursor-pointer my-10 p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl hover:shadow-outline hover:border-gray-600 transition-all duration-300"
  >
    <h2 className="text-3xl font-bold text-gray-100 mb-4">
        Frontend Performance Best Practices
      </h2>
      <p className="text-lg text-gray-300">
        Ensuring a smooth user experience is paramount, and optimizing frontend
        performance plays a crucial role. I'm harnessing the guidelines provided
        by the   
        <a
          href="https://roadmap.sh/best-practices/frontend-performance"
          className="text-red-400 hover:text-red-300 underline"
          target="_blank"
          rel="noopener noreferrer"
        > Frontend Performance Best Practices on roadmap.sh 
        </a> to improve site speed and responsiveness.
      </p>
      <Card title="Key Focus Areas">
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Understanding and implementing efficient loading strategies.</li>
          <li>Optimizing rendering performance and responsiveness.</li>
          <li>Minimizing and managing dependencies.</li>
          <li>Leveraging browser caching and optimizing assets.</li>
        </ul>
      </Card>
    </motion.div>
  );
};

export default FrontendPerformanceBestPractices;
