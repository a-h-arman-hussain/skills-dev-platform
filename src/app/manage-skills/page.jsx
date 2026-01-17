"use client";

import PrivateRoute from "@/Context/PrivateRoute";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/Context/AuthProvider";
import Loader from "@/components/Loader";
import Link from "next/link";
import Swal from "sweetalert2";

const ManageProduct = () => {
  const { user } = useContext(AuthContext);
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://skills-dev-platform-server.onrender.com/my-skills?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSkills(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  const handleUpdateSkill = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const form = e.target;
    const formData = {
      name: form.name.value,
      category: form.category.value,
      description: form.description.value,
      thumbnailUrl: form.thumbnailUrl.value,
      price: parseFloat(form.price.value), // Price field added
      created_at: selectedSkill.created_at,
      created_by: selectedSkill.created_by,
    };

    try {
      const res = await fetch(
        `https://skills-dev-platform-server.onrender.com/skills/${selectedSkill._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0 || data.success) {
        setSkills((prev) =>
          prev.map((item) =>
            item._id === selectedSkill._id ? { ...item, ...formData } : item
          )
        );

        Swal.fire({
          icon: "success",
          title: "Updated Successfully!",
          confirmButtonColor: "#2563eb",
        });

        setIsModalOpen(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setBtnLoading(false);
    }
  };

  const handleDelete = (skill) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://skills-dev-platform-server.onrender.com/skills/${skill._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then(() => {
            setSkills((prev) => prev.filter((s) => s._id !== skill._id));
            Swal.fire("Deleted!", "Your course has been removed.", "success");
          });
      }
    });
  };

  if (loading) return <Loader />;

  return (
    <PrivateRoute>
      <div className="min-h-screen">
        {/* Manage Skills Header */}
        <header className="text-center mb-10">
          {/* Sub-title: uppercase tracking-widest style */}
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm">
            Instructor Dashboard
          </span>

          {/* Main Title: Black font with Blue highlight */}
          <h1 className="mt-2 text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Manage My <span className="text-blue-600">Skills</span>
          </h1>

          {/* The Blue Line: Shadow and Rounded */}
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>

          {/* Description: Light grey and leading-relaxed */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take full control of your content. Efficiently update course details
            or remove the skills you have published on the platform.
          </p>
        </header>

        {skills.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow-sm text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-500 mb-4 text-lg font-medium">
              You haven't added any courses yet.
            </p>
            <Link
              href="/add-skill"
              className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold"
            >
              Add Your First Skill
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="flex flex-col md:flex-row items-center gap-6 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={skill.thumbnailUrl}
                  alt={skill.name}
                  className="w-full md:w-48 h-32 object-cover rounded-xl shadow-inner"
                />

                <div className="flex-1 space-y-1">
                  <h2 className="text-xl font-black text-gray-800">
                    {skill.name}
                  </h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                    <p>
                      <span className="font-bold text-blue-600">Category:</span>{" "}
                      {skill.category}
                    </p>
                    <p>
                      <span className="font-bold text-blue-600">Price:</span> $
                      {skill.price || 0}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">
                    Added on: {new Date(skill.created_at).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                  <button
                    onClick={() => {
                      setSelectedSkill(skill);
                      setIsModalOpen(true);
                    }}
                    className="flex-1 md:flex-none px-5 py-2 rounded-xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(skill)}
                    className="flex-1 md:flex-none px-5 py-2 rounded-xl bg-red-50 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-all"
                  >
                    Delete
                  </button>
                  <Link
                    href={`/course-details/${skill._id}`}
                    className="flex-1 md:flex-none px-5 py-2 rounded-xl bg-gray-900 text-white font-bold text-center"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- MODAL --- */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <h2 className="text-3xl font-black mb-6 text-gray-900 border-b pb-4">
                Edit Course Info
              </h2>

              <form
                onSubmit={handleUpdateSkill}
                className="space-y-5 text-black"
              >
                <div>
                  <label className="block font-bold text-gray-700 mb-1 text-sm uppercase">
                    Course Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={selectedSkill?.name}
                    required
                    className="w-full border-gray-200 border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1 text-sm uppercase">
                      Category
                    </label>
                    <select
                      name="category"
                      defaultValue={selectedSkill?.category}
                      required
                      className="w-full border-gray-200 border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="Programming">Programming</option>
                      <option value="Design">Design</option>
                      <option value="Business">Business</option>
                      <option value="Science">Science</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1 text-sm uppercase">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      name="price"
                      step="0.01"
                      defaultValue={selectedSkill?.price}
                      required
                      className="w-full border-gray-200 border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1 text-sm uppercase">
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={selectedSkill?.description}
                    rows="3"
                    required
                    className="w-full border-gray-200 border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1 text-sm uppercase">
                    Thumbnail URL
                  </label>
                  <input
                    type="text"
                    name="thumbnailUrl"
                    defaultValue={selectedSkill?.thumbnailUrl}
                    required
                    className="w-full border-gray-200 border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    className="px-6 py-2.5 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-all"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={btnLoading}
                    className="px-8 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 disabled:bg-blue-300"
                  >
                    {btnLoading ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </PrivateRoute>
  );
};

export default ManageProduct;
