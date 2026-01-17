"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function PopularCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          "https://skills-dev-platform-server.onrender.com/popular-skills"
        );
        const data = await res.json();
        // রিকোয়ারমেন্ট অনুযায়ী যদি অনেক ডাটা থাকে, আমরা শুধু প্রথম ৬টি দেখাতে পারি ল্যান্ডিং পেজে
        setCourses(data.slice(0, 6));
      } catch (err) {
        console.error("Failed to load courses:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <section className="mt-10">
        {/* Standard Header for Dark Background */}
        <div className="text-center mb-8">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm">
            Our Impact
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-black">
            Global Learning <span className="text-blue-600">Community</span>
          </h2>

          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students from around the world who are already
            learning on SkillDev.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {loading ? (
            // লোডিং হওয়ার সময় ৩টি মক কঙ্কাল (Skeleton) কার্ড দেখালে ইউজার এক্সপেরিয়েন্স ভালো হবে
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <div
                key={n}
                className="h-80 bg-gray-200 animate-pulse rounded-2xl"
              ></div>
            ))
          ) : courses.length > 0 ? (
            courses.map((course) => <Card key={course._id} item={course} />)
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 italic">
                No courses found at the moment.
              </p>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <Link href='/all-skills' className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
            View All Skills
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
    </section>
  );
}
