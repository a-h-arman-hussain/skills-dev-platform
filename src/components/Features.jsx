"use client";

import React from "react";

const Features = () => {
  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry experts who provide hands-on guidance and mentorship.",
      icon: "👨‍🏫",
      color: "bg-blue-50",
    },
    {
      title: "Flexible Learning",
      description:
        "Study at your own pace with courses designed to fit your schedule.",
      icon: "⏰",
      color: "bg-purple-50",
    },
    {
      title: "Hands-on Projects",
      description:
        "Build real-world projects to apply your skills and showcase your work.",
      icon: "🛠️",
      color: "bg-pink-50",
    },
    {
      title: "Certificate of Completion",
      description:
        "Earn recognized certificates to demonstrate your learning achievements.",
      icon: "📜",
      color: "bg-green-50",
    },
  ];

  return (
    <section className="mt-10">
        {/* Why Choose Us Header */}
        <div className="text-center mb-16">
          {/* Sub-title: uppercase tracking-widest style */}
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm">
            Top Quality Training
          </span>

          {/* Main Title: Black font with Blue highlight */}
          <h2 className="mt-2 text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>

          {/* The Blue Line: Shadow and Rounded */}
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>

          {/* Description: Light grey and leading-relaxed */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide a unique learning environment that empowers you to master
            new technologies through practical experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-bounce-slower`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Features;
