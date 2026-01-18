"use client";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaBookOpen,
  FaAward,
  FaChalkboardTeacher,
} from "react-icons/fa";

const ImpactSection = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-3xl text-blue-600" />,
      count: "15K+",
      label: "Active Students",
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-3xl text-blue-600" />,
      count: "120+",
      label: "Total Courses",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
      count: "50+",
      label: "Expert Mentors",
    },
    {
      id: 4,
      icon: <FaAward className="text-3xl text-blue-600" />,
      count: "98%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="my-10">
      <div className="container mx-auto px-6">
        {/* আপনার সেট করা স্ট্যান্ডার্ড হেডার */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm">
            Our Impact
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            SkillDev <span className="text-blue-600">By The Numbers</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are proud to empower thousands of learners across the globe with
            practical skills and professional mentorship.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-2xl hover:shadow-blue-100 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900">
                {item.count}
              </h3>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
