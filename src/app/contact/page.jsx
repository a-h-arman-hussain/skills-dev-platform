"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.message) {
      return Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill all the fields!",
      });
    }

    // Success Swal
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out. We will get back to you soon.",
    });

    console.log("Form Submitted:", form);

    // Reset Form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 text-gray-800">
      {/* PAGE TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Contact <span className="text-blue-600">Us</span>
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* CONTACT FORM */}
        <div className="bg-white p-8 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                placeholder="Write your message"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <p className="text-gray-600 mb-6">
            Have questions or need help? Reach out anytime — we’re always happy
            to assist you.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold">📍 Address</h3>
              <p className="text-gray-600">Chittagong, Bangladesh</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">📞 Phone</h3>
              <p className="text-gray-600">+880 1315-315449</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">📧 Email</h3>
              <p className="text-gray-600">armanhd16@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
