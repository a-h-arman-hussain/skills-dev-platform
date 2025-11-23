"use client";

import PrivateRoute from "@/Context/PrivateRoute";

const AddCourse = () => {
  return (
    <PrivateRoute>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Add a New Course</h1>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Course Name</label>
            <input
              type="text"
              placeholder="Enter course name"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              placeholder="Enter course description"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Course
          </button>
        </form>
      </div>
    </PrivateRoute>
  );
};

export default AddCourse;
