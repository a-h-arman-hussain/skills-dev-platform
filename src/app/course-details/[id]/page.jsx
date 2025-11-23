"use client";

import { use, useEffect, useState } from "react";

export default function CourseDetails({ params }) {
  const { id } = use(params);
  console.log(id)
  const [item, setItem] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      const selected = data.find((c) => c.id == id);
      setItem(selected);
    };

    loadData();
  }, [id]);

  if (!item) {
    return <h1 className="p-6 text-gray-600">Loading...</h1>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">{item.title}</h1>

      <img
        src={item.image}
        className="w-full rounded-xl shadow mb-4"
        alt={item.title}
      />

      <p className="text-lg text-gray-700">{item.description}</p>
    </div>
  );
}
