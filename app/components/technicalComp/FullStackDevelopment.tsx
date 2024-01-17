"use client";

import React from "react";
import Card from "../Card";
import { motion } from "framer-motion";

const FullStackDevelopment = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileHover={{ scale: 1.03 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="max-w-4xl mx-auto cursor-pointer my-10 p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl hover:shadow-outline hover:border-gray-600 transition-all duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-100 mb-4">
        Full Stack Development Mastery
      </h2>
      <p className="text-lg text-gray-300">
        Aiming to be a proficient full-stack developer, I'm following the
        <a
          href="https://roadmap.sh/full-stack"
          className="text-red-400 hover:text-red-300 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full Stack Development roadmap on roadmap.sh
        </a>
        . This includes a balanced focus on front-end and back-end technologies,
        database management, and modern development methodologies. My journey
        encompasses a deep dive into both client-side and server-side languages,
        frameworks, and databases, ensuring a comprehensive skillset in
        full-stack development.
      </p>
      <Card title="Key Focus Areas">
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Enhancing skills in both front-end and back-end technologies.</li>
          <li>
            Learning about different databases and effective data handling.
          </li>
          <li>Understanding server, network, and hosting environments.</li>
          <li>
            Developing proficiency in security, CI/CD, and version control.
          </li>
        </ul>
      </Card>
    </motion.div>
  );
};

export default FullStackDevelopment;
