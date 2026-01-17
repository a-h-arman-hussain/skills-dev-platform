"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import {
  FiArrowLeft,
  FiTag,
  FiUser,
  FiCalendar,
  FiDollarSign,
} from "react-icons/fi";

export default function CourseDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          `https://skills-dev-platform-server.onrender.com/skills/${id}`
        );
        const data = await res.json();

        if (data) {
          setItem(data.result || data);
        } else {
          setItem(null);
        }
      } catch (err) {
        console.error(err);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) return <Loader />;

  if (!item) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-black text-gray-300">Course Not Found</h1>
        <button
          onClick={() => router.push("/all-skills")}
          className="text-blue-600 font-bold hover:underline"
        >
          Return to All Skills
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2 text-gray-600 font-bold hover:text-blue-600 transition-colors"
        >
          <FiArrowLeft /> Back to Courses
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
          {/* Left Side: Thumbnail */}
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={item.thumbnailUrl}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                alt={item.name}
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                {item.category}
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                {item.name}
              </h1>

              <div className="flex items-center gap-4 text-2xl font-black text-blue-600 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <FiDollarSign className="text-blue-400" />
                <span>{item.price > 0 ? `${item.price}` : "Free"}</span>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {item.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <FiUser className="text-blue-500" />
                  <span>
                    By:{" "}
                    <span className="text-gray-900 font-bold">
                      {item.created_by}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <FiCalendar className="text-blue-500" />
                  <span>
                    Published:{" "}
                    <span className="text-gray-900 font-bold">
                      {new Date(item.created_at).toLocaleDateString()}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <FiTag className="text-blue-500" />
                  <span>
                    Category:{" "}
                    <span className="text-gray-900 font-bold">
                      {item.category}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="mt-10 space-y-3">
              <button className="w-full py-4 bg-blue-600 text-white font-black text-lg rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all">
                Enroll Now
              </button>
              <p className="text-center text-xs text-gray-400 font-medium uppercase tracking-widest">
                7-Day Money Back Guarantee
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
