"use client";

import { AuthContext } from "@/Context/AuthProvider";
import PrivateRoute from "@/Context/PrivateRoute";
import React, { useContext } from "react";
import {
  FiUser,
  FiMail,
  FiCheckCircle,
  FiXCircle,
  // FiEdit,
  FiLogOut,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <PrivateRoute>
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg bg-white shadow-2xl shadow-blue-100 rounded-[2.5rem] overflow-hidden border border-gray-100"
        >
          {/* প্রোফাইল হেডার ব্যাকগ্রাউন্ড */}
          <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400 relative">
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
              <div className="relative">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-32 h-32 rounded-3xl border-4 border-white shadow-xl object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-3xl bg-gray-100 flex items-center justify-center border-4 border-white shadow-xl">
                    <FiUser className="text-gray-400 w-14 h-14" />
                  </div>
                )}
                {/* অনলাইন স্ট্যাটাস ইন্ডিকেটর */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* ইউজার ডিটেইলস সেকশন */}
          <div className="pt-20 pb-10 px-8 text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-1">
              {user?.displayName || "Anonymous User"}
            </h2>
            <p className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-8">
              Skill Platform Member
            </p>

            <div className="space-y-4 max-w-sm mx-auto">
              {/* ইমেইল কার্ড */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <FiMail className="text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black text-gray-400">
                    Email Address
                  </p>
                  <p className="text-gray-800 font-bold truncate">
                    {user?.email || "Not Available"}
                  </p>
                </div>
              </div>

              {/* ভেরিফিকেশন স্ট্যাটাস কার্ড */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div
                  className={`p-2 rounded-lg ${
                    user?.emailVerified
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user?.emailVerified ? (
                    <FiCheckCircle className="text-xl" />
                  ) : (
                    <FiXCircle className="text-xl" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black text-gray-400">
                    Status
                  </p>
                  <p className="text-gray-800 font-bold">
                    {user?.emailVerified ? "Verified Account" : "Not Verified"}
                  </p>
                </div>
              </div>
            </div>

            {/* অ্যাকশন বাটনসমূহ */}
            <div className="mt-10 flex justify-center">
              {/* <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-4 rounded-2xl font-black hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                <FiEdit /> Edit Profile
              </button> */}
              <button
                onClick={logOut}
                className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-4 rounded-2xl font-black hover:bg-red-600 hover:text-white transition-all active:scale-95"
              >
                <FiLogOut /> Logout
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </PrivateRoute>
  );
};

export default Profile;
