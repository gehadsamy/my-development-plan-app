/* eslint-disable react/no-unescaped-entities */


"use client";

import React from "react";
import Card from "../Card";
import { motion } from "framer-motion";

const NodejsSkills = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileHover={{ scale: 1.03 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="max-w-4xl cursor-pointer mx-auto my-10 p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl hover:shadow-outline hover:border-gray-600 transition-all duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-100 mb-4">Node.js Skills</h2>
      <p className="text-lg text-gray-300">
        Over the next 6 months, I'm committed to enhancing my Node.js skills,
        with a focus on backend development, RESTful API integration, and
        performance optimization, as guided by the{" "}
        <a
          href="https://roadmap.sh/nodejs"
          className="text-red-400 hover:text-red-300 underline"

          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js roadmap on roadmap.sh
        </a>
        .
      </p>
      <Card title="Key Focus Areas">
      <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Mastering backend development with Express.js.</li>
          <li>Understanding asynchronous programming in Node.js.</li>
          <li>Building and integrating RESTful APIs.</li>
          <li>Database integration and best practices for API development.</li>
        </ul>
      </Card>
 
    </motion.div>
  );
};

export default NodejsSkills;
