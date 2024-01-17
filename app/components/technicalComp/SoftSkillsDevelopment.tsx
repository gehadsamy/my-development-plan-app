"use client";

import React from "react";
import { motion } from "framer-motion";

const SoftSkillsDevelopment = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileHover={{ scale: 1.03 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="max-w-4xl cursor-pointer mx-auto my-10 p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl hover:shadow-outline hover:border-gray-600 transition-all duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-100 mb-4">
        Soft Skills Development
      </h2>
      <p className="text-lg text-gray-300">
        Developing soft skills is crucial for professional growth. I will
        leverage courses on{" "}
        <a
          href="https://www.almentor.net/home"
          className="text-red-400 hover:text-red-300 underline"

          target="_blank"
          rel="noopener noreferrer"
        >
          Almentor
        </a>{" "}
        to enhance my skills, including:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-200">
        <li>
          <strong>Time Management & Organization Skills:</strong> Improving
          efficiency and productivity (
          <a
            href="https://www.almentor.net/courses/Time-Management-&-Organization-Skills"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Course Link
          </a>
          ).
        </li>
        <li>
          <strong>Creative Thinking at the Workplace:</strong> Enhancing
          innovation and creative problem-solving skills (
          <a
            href="https://www.almentor.net/courses/Creative-Thinking-at-the-Workplace"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Course Link
          </a>
          ).
        </li>
        <li>
          <strong>Problem Solving:</strong> Developing strategies for effective
          problem-solving (
          <a
            href="https://www.almentor.net/courses/Problem-Solving"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Course Link
          </a>
          ).
        </li>
        <li>
          <strong>Adaptive Leadership & Results-Based Management:</strong>{" "}
          Learning flexible leadership approaches and results-driven strategies
          (
          <a
            href="https://www.almentor.net/courses/Adaptive-Leadership-&-Results-Based-Management"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Course Link
          </a>
          ).
        </li>
        <li>
          <strong>Successful Leadership Models:</strong> Exploring various
          leadership styles and models for success (
          <a
            href="https://www.almentor.net/courses/Successful-Leadership-Models"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            Course Link
          </a>
          ).
        </li>
      </ul>
    </motion.div>
  );
};

export default SoftSkillsDevelopment;
