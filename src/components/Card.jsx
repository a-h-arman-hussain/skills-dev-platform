"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  const { _id, thumbnailUrl, name, description } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
      }}
      className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden transition mx-auto"
    >
      {/* IMAGE */}
      <motion.img
        src={thumbnailUrl}
        alt={name}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />

      {/* CONTENT */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg text-black font-semibold mb-2">{name}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        {/* Button */}
        <Link href={`/course-details/${_id}`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View Details
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
