"use client";

import { useState, useContext, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiUser,
  FiLogOut,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/Context/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { user, logOut } = useContext(AuthContext);

  // স্ক্রল করলে শ্যাডো এবং ব্যাকগ্রাউন্ড চেঞ্জ করার জন্য
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/all-skills", label: "All Skills" },
    ...(user
      ? [
          { href: "/add-skill", label: "Add Skill" },
          { href: "/manage-skills", label: "Manage Skills" },
        ]
      : []),
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleLogOut = async () => {
    try {
      await logOut();
      document.cookie =
        "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      setProfileOpen(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header
      className={`top-0 w-full transition-all duration-300 ${
        scrolled
          ? "py-1"
          : ""
      }`}
    >
      <nav className="flex justify-between items-center">
        {/* LOGO AREA */}
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700"
            >
              {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-900">
              Skill<span className="text-blue-600">Dev</span>
            </span>
          </Link>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* AUTH ACTIONS */}
        <div className="flex items-center gap-3">
          {!user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="hidden sm:block px-5 py-2 text-sm font-bold text-gray-700 hover:text-blue-600"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 active:scale-95"
              >
                Get Started
              </Link>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1 pr-3 rounded-full bg-gray-50 border border-gray-100 hover:border-blue-300 transition-all"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <FiUser />
                    </div>
                  )}
                </div>
                <FiChevronDown
                  className={`text-gray-400 transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN MENU */}
              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl p-3 z-50"
                  >
                    <div className="px-4 py-3 border-b border-gray-50 mb-2">
                      <p className="text-xs font-black text-blue-600 uppercase tracking-widest">
                        Account
                      </p>
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>

                    <Link
                      href="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"
                    >
                      <FiUser className="text-lg" /> My Profile
                    </Link>

                    <button
                      onClick={handleLogOut}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 rounded-xl transition-all mt-1"
                    >
                      <FiLogOut className="text-lg" /> Logout Account
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-lg font-bold ${
                    pathname === link.href
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
