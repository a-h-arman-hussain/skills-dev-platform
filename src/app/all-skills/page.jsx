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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://skills-dev-platform-server.onrender.com/skills"
      );
      const data = await res.json();

      setSkills(data);
      setFilteredSkills(data);
      setLoading(false);

      // Extract unique categories
      const uniqueCategories = ["All", ...new Set(data.map((s) => s.category))];
      setCategories(uniqueCategories);
    };

    loadData();
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setActiveCategory(category);
    if (category === "All") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter((s) => s.category === category));
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen font-sans p-6">
      <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-500 mb-6">
        All Skills
      </h1>

      {/* Smart Dropdown + Count */}
      <div className="flex justify-between items-center mb-6">
        {/* Skills Count */}
        <span className="text-gray-700 font-medium text-lg">
          {activeCategory === "All" ? "All" : activeCategory} Skills:{" "}
          <span className="text-sm text-blue-500">
            ({filteredSkills.length})
          </span>
        </span>

        {/* Dropdown */}
        <CustomDropdown
          options={categories}
          value={activeCategory}
          onChange={(cat) => handleCategoryChange({ target: { value: cat } })}
        />
      </div>

      {/* Skills Grid */}
      {filteredSkills.length === 0 ? (
        <p className="text-center text-gray-600">No skills found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
