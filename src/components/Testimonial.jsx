const Testimonial = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      message:
        "This platform helped me land my first job as a web developer. The courses are amazing!",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Mark Smith",
      role: "Data Analyst",
      message:
        "The hands-on projects really helped me build a strong portfolio. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Sofia Lee",
      role: "UX Designer",
      message:
        "I love the flexible learning pace and expert instructors. I learned a lot in a short time!",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Learners Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real feedback from our students who achieved their goals.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
