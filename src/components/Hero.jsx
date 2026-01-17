"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/Context/AuthProvider";

const Hero = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="relative bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white overflow-hidden w-full min-h-[70vh] flex items-center p-5 rounded-3xl">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400 opacity-10 rounded-full filter blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center w-full">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6 py-10 md:py-0">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium mb-2">
            🚀 The Ultimate Skill Learning Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Learn. <span className="text-pink-300">Grow.</span> <br /> Achieve.
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Start your career with expert guidance. Our platform features 200+
            hands-on projects, industry-standard courses, and certifications to
            help you succeed.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            {user ? (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                  Welcome back, {user.displayName || "Learner"}!
                </h2>
                <Link
                  href="/all-skills"
                  className="inline-block bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl shadow-xl hover:scale-105 transition-transform"
                >
                  Continue Learning
                </Link>
              </div>
            ) : (
              <>
                <Link
                  href="/all-skills"
                  className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl shadow-xl hover:bg-indigo-50 transition-all"
                >
                  Explore Skills
                </Link>
                <Link
                  href="/login"
                  className="border-2 border-white/50 backdrop-blur-sm text-white font-bold px-8 py-3 rounded-xl hover:bg-white hover:text-indigo-700 transition-all"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Right Content: Animated SVG */}
        <div className="flex-1 flex justify-center md:justify-end animate-float-slow">
          <svg
            className="w-64 h-64 md:w-80 md:h-80"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="gradCourse"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>

            {/* Laptop */}
            <rect
              x="50"
              y="90"
              width="100"
              height="50"
              rx="5"
              fill="url(#gradCourse)"
              className="animate-float-slow"
            />
            <rect
              x="55"
              y="95"
              width="90"
              height="30"
              rx="2"
              fill="#fff"
              opacity="0.7"
            />

            {/* Book */}
            <rect
              x="30"
              y="40"
              width="40"
              height="60"
              rx="5"
              fill="#FBBF24"
              className="animate-bounce-slow"
            />
            <line
              x1="35"
              y1="50"
              x2="65"
              y2="50"
              stroke="#fff"
              strokeWidth="2"
              opacity="0.8"
            />
            <line
              x1="35"
              y1="60"
              x2="65"
              y2="60"
              stroke="#fff"
              strokeWidth="2"
              opacity="0.6"
            />

            {/* Certificate */}
            <rect
              x="130"
              y="40"
              width="40"
              height="30"
              rx="3"
              fill="#10B981"
              className="animate-bounce-slower"
            />
            <line
              x1="135"
              y1="50"
              x2="165"
              y2="50"
              stroke="#fff"
              strokeWidth="2"
            />
            <line
              x1="135"
              y1="55"
              x2="165"
              y2="55"
              stroke="#fff"
              strokeWidth="2"
            />

            {/* Floating Learning Icons */}
            <circle
              cx="20"
              cy="20"
              r="8"
              fill="#fff"
              opacity="0.6"
              className="animate-bounce-slow"
            />
            <circle
              cx="180"
              cy="180"
              r="10"
              fill="#fff"
              opacity="0.5"
              className="animate-bounce-slower"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
