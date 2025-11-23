"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function AllCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setCourses(data);
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen font-sans p-6">
      <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-500 mb-4">
        All Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
