"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  // রিকোয়ারমেন্ট অনুযায়ী price এবং category যোগ করা হলো
  const { _id, thumbnailUrl, name, description, price, category } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }} // স্ক্রলে আসলে অ্যানিমেশন হবে
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -10, // হালকা উপরে উঠবে
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
      }}
      className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all mx-auto group"
    >
      {/* IMAGE SECTION */}
      <div className="relative h-48 w-full overflow-hidden">
        <motion.img
          src={thumbnailUrl || "https://via.placeholder.com/400x250"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category Badge */}
        {category && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {category}
          </div>
        )}
      </div>

      {/* CONTENT SECTION */}
      <div className="p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl text-gray-800 font-bold mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {name}
          </h2>
          <p className="text-gray-500 text-sm line-clamp-2 mb-4">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Price - Requirement Specific */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 uppercase font-semibold">
              Price
            </span>
            <span className="text-xl font-black text-blue-600">
              {price > 0 ? `$${price}` : "Free"}
            </span>
          </div>

          {/* Details Button */}
          <Link href={`/course-details/${_id}`}>
            {" "}
            {/* Route standardizing to /items/[id] */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
            >
              Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
