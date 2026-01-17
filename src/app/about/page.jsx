"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Active Students", value: "10K+", color: "text-blue-600" },
    { label: "Professional Courses", value: "120+", color: "text-purple-600" },
    { label: "Student Rating", value: "4.9/5", color: "text-pink-600" },
  ];

  const team = [
    {
      name: "A H Arman Hussain",
      role: "Frontend Developer",
      image: "https://picsum.photos/200?person1",
    },
    {
      name: "Abdul Karim Saim",
      role: "Backend Engineer",
      image: "https://picsum.photos/200?person2",
    },
    {
      name: "Mesbah Uddin Raihan",
      role: "UI/UX Designer",
      image: "https://picsum.photos/200?person3",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gray-50 overflow-hidden">
        {/* About Us Header */}
        <div className="text-center relative z-10 mb-10 px-6">
          {/* Sub-title: uppercase tracking-widest style */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm block"
          >
            Our Story & Vision
          </motion.span>

          {/* Main Title: Black font with Blue highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight"
          >
            About <span className="text-blue-600">Our Platform</span>
          </motion.h1>

          {/* The Blue Line: Shadow and Rounded */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-lg shadow-blue-500/50"
          ></motion.div>

          {/* Description: Light grey and leading-relaxed */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are dedicated to bridging the gap between education and industry
            requirements, empowering the next generation of digital creators
            with practical and accessible learning resources.
          </motion.p>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mt-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Our Mission & <span className="text-blue-600">Vision</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our mission is to provide high-quality, practical, and affordable
            learning experiences. We believe that everyone deserves the chance
            to excel in the tech world.
          </p>
          <ul className="space-y-4">
            {[
              "Practical Hands-on Learning",
              "Expert Mentorship",
              "Career Growth Focus",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 font-bold text-gray-800"
              >
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-600 rounded-3xl h-80 shadow-2xl shadow-blue-200 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800"
            alt="Team Work"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-900 py-20 rounded-2xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className={`text-5xl font-black ${stat.color}`}>
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="my-10">
        {/* Meet the Team Header */}
        <div className="text-center mb-8 px-6">
          {/* Sub-title: uppercase tracking-widest style */}
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm">
            The Minds Behind SkillDev
          </span>

          {/* Main Title: Black font with Blue highlight */}
          <h2 className="mt-2 text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Meet the <span className="text-blue-600">Team</span>
          </h2>

          {/* The Blue Line: Signature Shadow and Rounded style */}
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our diverse team of experts is dedicated to building a world-class
            learning experience for students worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {team.map((member, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="bg-white border border-gray-100 p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-blue-50 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-spin-slow"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium text-sm">{member.role}</p>

              <div className="mt-6 flex justify-center gap-4 text-gray-400">
                {/* Social Icons Placeholder */}
                <span className="hover:text-blue-500 cursor-pointer transition-colors">
                  LinkedIn
                </span>
                <span className="hover:text-gray-900 cursor-pointer transition-colors">
                  GitHub
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
