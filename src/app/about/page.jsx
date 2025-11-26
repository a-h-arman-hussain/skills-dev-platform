"use-client";

import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We are committed to providing high-quality learning resources to help
          learners grow their skills and build successful careers.
        </p>
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Our mission is to empower individuals with the knowledge and tools
          they need to succeed in today’s fast-growing digital world. We believe
          that learning should be accessible, enjoyable, and practical.
        </p>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-16 shadow-sm rounded-2xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 mt-2">Active Students</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">120+</h3>
            <p className="text-gray-600 mt-2">Professional Courses</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">4.9/5</h3>
            <p className="text-gray-600 mt-2">Student Rating</p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Member 1 */}
          <div className="bg-white shadow-md p-6 rounded-xl text-center">
            <img
              src="https://picsum.photos/200?person1"
              alt="Team Member"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Arman Hussain</h3>
            <p className="text-gray-600">Frontend Developer</p>
          </div>

          {/* Member 2 */}
          <div className="bg-white shadow-md p-6 rounded-xl text-center">
            <img
              src="https://picsum.photos/200?person2"
              alt="Team Member"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Saim Ahmed</h3>
            <p className="text-gray-600">Backend Engineer</p>
          </div>

          {/* Member 3 */}
          <div className="bg-white shadow-md p-6 rounded-xl text-center">
            <img
              src="https://picsum.photos/200?person3"
              alt="Team Member"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Raihan Islam</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
