"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white shadow-lg p-4"
    >
      <nav className="container mx-auto flex justify-between">
        {/* <Link href="/" legacyBehavior>
          <a className="hover:text-blue-300">Home</a>
        </Link> */}
        {/* <Link href="/about" legacyBehavior>
          <a className="hover:text-blue-300">About</a>
        </Link> */}
        {/* <Link href="/my-plan" legacyBehavior>
          <a className="hover:text-blue-300">My Plan</a>
        </Link> */}
      </nav>
    </motion.header>
  );
};
export default Header;
