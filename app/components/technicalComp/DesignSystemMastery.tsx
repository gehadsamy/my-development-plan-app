"use client";

import React from "react";
import Card from "../Card";
import { motion } from "framer-motion";

const DesignSystemMastery = () => {
  return (
    <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileHover={{ scale: 1.03 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    className="max-w-4xl mx-auto cursor-pointer my-10 p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl hover:shadow-outline hover:border-gray-600 transition-all duration-300"
  >
    <h2 className="text-3xl font-bold text-gray-100 mb-4">Design System Mastery</h2>
    <p className="text-lg text-gray-300">
        Enhancing my understanding of design systems is crucial for creating
        cohesive and scalable user interfaces. Following the{" "}
        <a
          href="https://roadmap.sh/design-system"
          className="text-red-400 hover:text-red-300 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design System roadmap on roadmap.sh
        </a>
        , I'll focus on key concepts such as design tokens, component libraries,
        and design principles.
      </p>
      <Card title="Key Focus Areas">
      <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>
            Understanding and applying design tokens for consistent styling.
          </li>
          <li>Building and maintaining component libraries.</li>
          <li>Learning about accessibility and usability in design systems.</li>
          <li>Exploring tools and technologies used in design systems.</li>
        </ul>
      </Card>
    </motion.div>
  );
};

export default DesignSystemMastery;
