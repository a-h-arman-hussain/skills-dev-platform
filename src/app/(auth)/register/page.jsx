"use client";

import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/Context/AuthProvider";
import { useRouter } from "next/navigation";

const Register = () => {
  const { createUser, loginWithGoogle, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [redirectTo, setRedirectTo] = useState("/");
  const router = useRouter();

  // Detect redirect query param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) setRedirectTo(redirect);
  }, []);

  // Register with email/password
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUser(email, password, name, imageUrl);
      router.push(redirectTo);
    } catch (err) {
      setError(err.message);
    }
  };

  // Register/Login with Google
  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      router.push(redirectTo);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        {error && (
          <p className="text-red-600 text-center mb-3 text-sm">{error}</p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-3 py-2 rounded-lg mt-1"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium">
              Profile Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              className="w-full border px-3 py-2 rounded-lg mt-1"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded-lg mt-1"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border px-3 py-2 rounded-lg mt-1"
              placeholder="Your Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 text-center text-sm text-gray-500">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="w-full border py-2 rounded-lg font-medium flex justify-center items-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account? Please{" "}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
