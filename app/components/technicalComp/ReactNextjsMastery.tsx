"use client";

import React from "react";
import Card from "../Card";
import { motion } from "framer-motion";

const ReactNextjsMastery = () => {
  return (
    <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileHover={{ scale: 1.03 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    className="max-w-4xl cursor-pointer mx-auto my-10 p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl hover:shadow-outline hover:border-gray-600 transition-all duration-300"
  >
    <h2 className="text-3xl font-bold text-gray-100 mb-4">React & Next.js Mastery</h2>
    <p className="text-lg text-gray-300">
        I'm committed to mastering advanced concepts in React, following the
        comprehensive guide provided by the{" "}
        <a
          href="https://roadmap.sh/react"
          className="text-red-400 hover:text-red-300 underline"

          target="_blank"
          rel="noopener noreferrer"
        >
          React roadmap on roadmap.sh
        </a>
        . This plan includes state management, hooks, context API, and
        server-side rendering in Next.js.
      </p>
      <Card title="Key Focus Areas">
      <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Deep dive into React hooks and context API.</li>
          <li>Exploring state management solutions (Redux, MobX).</li>
          <li>
            Server-side rendering and static site generation with Next.js.
          </li>
          <li>Performance optimization in React applications.</li>
        </ul>
      </Card>
    </motion.div>
  );
};

export default ReactNextjsMastery;
