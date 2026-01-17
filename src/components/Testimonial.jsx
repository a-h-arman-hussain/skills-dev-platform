"use client";

import Image from "next/image";
import arman from "../../public/arman.jpg";
import saim from "../../public/saim.jpg";
import raihan from "../../public/raihan.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "A H Arman Hussain",
      role: "Frontend Developer",
      message:
        "This platform helped me land my first job as a web developer. The courses are amazing and the projects are very practical!",
      avatar: arman,
    },
    {
      name: "Abdul Karim Saim",
      role: "Data Analyst",
      message:
        "The hands-on projects really helped me build a strong portfolio. The curriculum is industry-standard and easy to follow.",
      avatar: saim,
    },
    {
      name: "Mesbah Uddin Raihan",
      role: "UX Designer",
      message:
        "I love the flexible learning pace and expert instructors. I learned more in 3 months than I did in a year on my own!",
      avatar: raihan,
    },
  ];

  return (
    <section className="my-10">
      {/* Testimonials Header */}
      <div className="text-center mb-8">
        {/* Sub-title: uppercase tracking-widest style */}
        <span className="text-blue-600 font-bold tracking-widest uppercase text-[12px] md:text-sm">
          Success Stories
        </span>

        {/* Main Title: Black font with Blue highlight */}
        <h2 className="mt-2 text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          What Our <span className="text-blue-600">Learners Say</span>
        </h2>

        {/* The Blue Line: Shadow and Rounded */}
        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>

        {/* Description: Light grey and leading-relaxed */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied students who have transformed their
          careers through our platform.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
          >
            {/* FiQuote এর পরিবর্তে এটি ব্যবহার করুন */}
            <div className="absolute top-4 right-8 text-blue-100 text-6xl opacity-50 font-serif">
              “
            </div>

            <div className="flex items-center mb-6">
              <div className="relative w-14 h-14 mr-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover border-2 border-blue-100"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
                <p className="text-sm font-medium text-blue-600">{t.role}</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed italic relative z-10">
              "{t.message}"
            </p>

            {/* Star Ratings */}
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
