"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
        confirmButtonColor: "#2563eb",
      });
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "We will get back to you soon.",
      confirmButtonColor: "#2563eb",
    });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Contact Header Section */}
      <section className="">
        <div className="max-w-4xl mx-auto text-center px-6">
          {/* Sub-title: uppercase tracking-widest style */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm block"
          >
            Contact Support
          </motion.span>

          {/* Main Title: Black font with Blue highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight"
          >
            Get In <span className="text-blue-600">Touch</span>
          </motion.h1>

          {/* The Blue Line: Signature Shadow and Rounded style */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-lg shadow-blue-500/50"
          ></motion.div>

          {/* Description: Leading-relaxed and Responsive font */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have a question or just want to say hi? We'd love to hear from you.
            Our team typically responds within 24 hours.
          </motion.p>
        </div>
      </section>
      <div className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* CONTACT INFO CARD */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-8 relative z-10">
                Contact Information
              </h2>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                    <FiPhone className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-xl font-bold">+880 1315-315449</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                    <FiMail className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-xl font-bold">armanhd16@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                    <FiMapPin className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-xl font-bold">Chittagong, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Support Message */}
            <div className="p-8 border border-gray-100 rounded-3xl">
              <h3 className="font-bold text-gray-900 mb-2">
                Technical Support
              </h3>
              <p className="text-gray-600 text-sm">
                For technical issues regarding your courses, please visit our
                <span className="text-blue-600 font-bold cursor-pointer hover:underline ml-1">
                  Help Center
                </span>
                .
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white font-black rounded-2xl shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
