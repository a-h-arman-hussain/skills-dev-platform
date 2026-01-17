"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import CustomDropdown from "@/components/CustomDropdown";

export default function AllSkills() {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // সার্চের জন্য নতুন স্টেট
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          "https://skills-dev-platform-server.onrender.com/skills"
        );
        const data = await res.json();

        setSkills(data);
        setFilteredSkills(data);

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(data.map((s) => s.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Data fetching error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // ক্যাটাগরি এবং সার্চ দুইটার সমন্বয়ে ফিল্টারিং
  useEffect(() => {
    let result = skills;

    if (activeCategory !== "All") {
      result = result.filter((s) => s.category === activeCategory);
    }

    if (searchQuery) {
      result = result.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredSkills(result);
  }, [activeCategory, searchQuery, skills]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Explore All Skills Header */}
        <header className="mb-10 text-center">
          {/* Sub-title: uppercase tracking-widest style */}
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm">
            Limitless Opportunities
          </span>

          {/* Main Title: Black font with Blue highlight */}
          <h1 className="mt-2 text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Explore All <span className="text-blue-600">Skills</span>
          </h1>

          {/* The Blue Line: Shadow and Rounded */}
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>

          {/* Description: Light grey and leading-relaxed */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find the perfect course to advance your career. Filter by category
            or search by name to start your learning journey today.
          </p>
        </header>

        {/* Filters & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          {/* Search Box */}
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search skills..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between text-black">
            {/* Skills Count */}
            <span className="text-gray-600 font-bold bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
              {filteredSkills.length} Skills Found
            </span>

            {/* Dropdown */}
            <CustomDropdown
              options={categories}
              value={activeCategory}
              onChange={(cat) => setActiveCategory(cat)}
            />
          </div>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 text-gray-300">🔍</div>
            <p className="text-xl text-gray-500 font-medium">
              No skills found matching your criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {filteredSkills.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
