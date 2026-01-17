"use client";

import { AuthContext } from "@/Context/AuthProvider";
import PrivateRoute from "@/Context/PrivateRoute";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = {
      name: form.name.value,
      category: form.category.value,
      description: form.description.value,
      thumbnailUrl: form.thumbnailUrl.value,
      price: parseFloat(form.price.value), // নতুন রিকোয়ারমেন্ট অনুযায়ী
      created_at: new Date(),
      created_by: user?.email,
      userName: user?.displayName,
    };

    try {
      const res = await fetch(
        "https://skills-dev-platform-server.onrender.com/skills",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        Swal.fire({
          title: "Success!",
          html: `Your <span class="font-bold text-blue-600">${formData.name}</span> has been added successfully.`,
          icon: "success",
          confirmButtonColor: "#2563eb",
        });
        form.reset(); // ফর্ম ক্লিয়ার করা
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PrivateRoute>
      <div className="min-h-screen">
        <div className="max-w-2xl mx-auto">
          {/* Add New Skill Header */}
          <header className="text-center mb-10">
            {/* Sub-title: uppercase tracking-widest style */}
            <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm">
              Empower Others
            </span>

            {/* Main Title: Black font with Blue highlight */}
            <h1 className="mt-2 text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Share Your <span className="text-blue-600">Skill</span>
            </h1>

            {/* The Blue Line: Shadow and Rounded */}
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>

            {/* Description: Light grey and leading-relaxed */}
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fill up the form below to contribute a new course to our community
              and help learners grow their professional expertise.
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 shadow-xl shadow-blue-100/50 rounded-2xl border border-gray-100 text-black"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Course Name */}
              <div className="md:col-span-2">
                <label className="block font-bold text-gray-700 mb-2 text-sm uppercase">
                  Course Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Advanced React Mastery"
                  required
                  className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block font-bold text-gray-700 mb-2 text-sm uppercase">
                  Category
                </label>
                <select
                  name="category"
                  required
                  className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                >
                  <option value="">Select</option>
                  <option value="Programming">Programming</option>
                  <option value="Design">Design</option>
                  <option value="Business">Business</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Language">Language</option>
                </select>
              </div>

              {/* Price Field (Added based on Card Requirement) */}
              <div>
                <label className="block font-bold text-gray-700 mb-2 text-sm uppercase">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="29.99"
                  step="0.01"
                  required
                  className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="block font-bold text-gray-700 mb-2 text-sm uppercase">
                Thumbnail URL
              </label>
              <input
                type="url"
                name="thumbnailUrl"
                placeholder="https://images.unsplash.com/..."
                required
                className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-bold text-gray-700 mb-2 text-sm uppercase">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Describe what students will learn..."
                rows="4"
                required
                className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all ${
                loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200 active:scale-[0.98]"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Processing...
                </span>
              ) : (
                "Publish Course"
              )}
            </button>
          </form>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default AddCourse;
