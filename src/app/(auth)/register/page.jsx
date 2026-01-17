"use client";

import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/Context/AuthProvider";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Register = () => {
  const { createUser, loginWithGoogle, loading } = useContext(AuthContext);
  const [redirectTo, setRedirectTo] = useState("/all-skills");
  const [photoPreview, setPhotoPreview] = useState("");
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) setRedirectTo(redirect);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUser(email, password, name, imageUrl);

      // কুকি সেট করা
      document.cookie = `isLoggedIn=true; path=/; max-age=${60 * 60 * 24}`;

      Swal.fire({
        title: "Success!",
        html: `Welcome <span class="font-bold text-blue-600">${name}</span>! Your account is ready.`,
        icon: "success",
        confirmButtonColor: "#2563eb",
      }).then(() => {
        router.push(redirectTo);
      });
    } catch (err) {
      Swal.fire({
        title: "Registration Failed",
        text: err.message || "Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white shadow-2xl shadow-blue-100 rounded-[2.5rem] p-10 border border-gray-100"
      >
        <div className="text-center mb-10">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px]">
            Join the Community
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
            Create an <span className="text-blue-600">Account</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>
        </div>

        <form
          onSubmit={handleRegister}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Full Name */}
          <div className="md:col-span-2">
            <label className="text-xs font-black uppercase text-gray-400 ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-100 bg-gray-50 px-4 py-3.5 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium text-black"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="md:col-span-1">
            <label className="text-xs font-black uppercase text-gray-400 ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-100 bg-gray-50 px-4 py-3.5 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium text-black"
              placeholder="Email address"
              required
            />
          </div>

          {/* Password */}
          <div className="md:col-span-1">
            <label className="text-xs font-black uppercase text-gray-400 ml-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-100 bg-gray-50 px-4 py-3.5 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium text-black"
              placeholder="Min 6 chars"
              required
            />
          </div>

          {/* Image URL with Preview Side by Side */}
          <div className="md:col-span-2 flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-xs font-black uppercase text-gray-400 ml-1">
                Profile Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                onChange={(e) => setPhotoPreview(e.target.value)}
                className="w-full border border-gray-100 bg-gray-50 px-4 py-3.5 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium text-black"
                placeholder="https://..."
              />
            </div>
            {photoPreview && (
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-blue-100 shadow-sm mb-0.5 bg-gray-50">
                <img
                  src={photoPreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-gray-900 text-white py-4 rounded-2xl font-black hover:bg-blue-600 transition-all shadow-xl active:scale-95 disabled:bg-gray-400 mt-2"
          >
            {loading ? "Establishing Identity..." : "Create Account Now"}
          </button>
        </form>

        <p className="text-center text-sm mt-8 font-medium text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-bold hover:underline">
            Login Here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
