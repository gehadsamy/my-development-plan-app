"use client";

import React from "react";
import Card from "../Card";
import { motion } from "framer-motion";

const CodeReviewMastery = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileHover={{ scale: 1.03 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="max-w-4xl mx-auto my-10 cursor-pointer p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl hover:shadow-outline hover:border-gray-600 transition-all duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-100 mb-4">
        Code Review Mastery
      </h2>
      <p className="text-lg text-gray-300">
        Code reviews are essential for maintaining high-quality code. I am
        committed to mastering the principles of effective code reviews, as
        guided by the{" "}
        <a
          href="https://roadmap.sh/code-review"
          className="text-red-400 hover:text-red-300 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code Review Pyramid on roadmap.sh
        </a>
        . This includes understanding the different levels of code review and
        best practices.
      </p>
      <Card title="Key Focus Areas">
      <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Learning the fundamentals of code review and its importance.</li>
          <li>
            Understanding the levels of code review from syntax to architecture.
          </li>
          <li>
            Developing skills for providing constructive and effective feedback.
          </li>
          <li>
            Exploring tools and techniques to streamline the review process.
          </li>
        </ul>
      </Card>
    </motion.div>
  );
};

export default CodeReviewMastery;
