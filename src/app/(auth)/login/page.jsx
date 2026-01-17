"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/Context/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const { loginWithGoogle, loading, setLoading } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("from") || "/all-skills";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ১. Mock Login Function (Hardcoded Credentials)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // হার্ডকোড ইমেইল ও পাসওয়ার্ড
    const mockEmail = "admin@skilldev.com";
    const mockPassword = "password123";

    try {
      if (email === mockEmail && password === mockPassword) {
        // ২. Store credentials in cookies
        document.cookie = `isLoggedIn=true; path=/; max-age=${60 * 60 * 24}`; 

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back to SkillDev!`,
          timer: 1500,
          showConfirmButton: false,
        });

        // ৪. Redirect to items/lists page
        router.replace(redirectTo);
      } else {
        throw new Error("Invalid email or password!");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      // গুগল লগইনের ক্ষেত্রেও কুকি সেট করা
      document.cookie = `isLoggedIn=true; path=/; max-age=${60 * 60 * 24}`;

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome!`,
        timer: 1500,
        showConfirmButton: false,
      });
      router.replace(redirectTo);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-gray-50 px-6">
      <div className="p-10 bg-white rounded-[2rem] shadow-2xl shadow-blue-100 w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px]">
            Welcome Back
          </span>
          <h1 className="text-3xl font-black text-gray-900 mt-2">
            Member <span className="text-blue-600">Login</span>
          </h1>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-xs font-black uppercase text-gray-400 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="admin@skilldev.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-100 bg-gray-50 px-4 py-4 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium text-black"
              required
            />
          </div>
          <div>
            <label className="text-xs font-black uppercase text-gray-400 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="password123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-100 bg-gray-50 px-4 py-4 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium text-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black hover:bg-blue-600 transition-all shadow-xl active:scale-95 disabled:bg-gray-400"
          >
            {loading ? "Verifying..." : "Sign In Now"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-[1px] bg-gray-100 flex-1"></div>
          <span className="text-xs font-bold text-gray-400 uppercase">
            Social Login
          </span>
          <div className="h-[1px] bg-gray-100 flex-1"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border-2 border-gray-100 py-3.5 rounded-2xl flex justify-center items-center gap-3 font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95"
        >
          <FcGoogle className="w-6 h-6" />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-8 font-medium text-gray-500">
          New to SkillDev?{" "}
          <a
            href="/register"
            className="text-blue-600 font-bold hover:underline"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
