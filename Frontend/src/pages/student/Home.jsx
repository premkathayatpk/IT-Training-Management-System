import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Master Full-Stack Web Development",
      subtitle: "Build real-world projects and get hired by top tech firms.",
      cta: "Enroll Now",
      bg: "bg-slate-900",
      accent: "text-blue-500",
    },
    {
      title: "10% Off for January Batch!",
      subtitle:
        "Start your year with a new skill. Early bird discounts available now.",
      cta: "Claim Discount",
      bg: "bg-indigo-900",
      accent: "text-yellow-400",
    },
    {
      title: "New Python for AI Course",
      subtitle:
        "Dive into Data Science and Machine Learning with our latest module.",
      cta: "View Course",
      bg: "bg-slate-800",
      accent: "text-green-400",
    },
  ];

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="font-sans text-slate-900">
      {/* Main Banner / Hero Slider */}
      <section
        className={`relative h-[600px] flex items-center transition-colors duration-700 ${slides[currentSlide].bg}`}
      >
        <div className="max-w-6xl mx-auto px-4 w-full grid md:grid-cols-2 items-center">
          <div className="text-white z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              {slides[currentSlide].title.split(" ").map((word, i) =>
                word.includes("Web") ||
                word.includes("Off") ||
                word.includes("Python") ? (
                  <span key={i} className={slides[currentSlide].accent}>
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                ),
              )}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-105">
                {slides[currentSlide].cta}
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Decorative Element for Slider */}
          <div className="hidden md:flex justify-end">
            <div className="w-72 h-72 border-8 border-white/10 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${currentSlide === i ? "w-8 bg-blue-500" : "w-2 bg-white/30"}`}
            />
          ))}
        </div>
      </section>

      {/* Feature Overview Section */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Specialized Services
          </h2>
          <p className="text-slate-500">
            Tailored education paths for students and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "IT Training",
              desc: "Hands-on coding bootcamps in Web, App, and Software Dev.",
              icon: "💻",
            },
            {
              title: "Certification Prep",
              desc: "Get ready for AWS, Cisco, and Microsoft global exams.",
              icon: "📜",
            },
            {
              title: "Corporate Workshops",
              desc: "Upskill your team with the latest enterprise technologies.",
              icon: "🏢",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all group"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Metrics / Stats Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real Results. Real Success.
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                "Over 5,000 students successfully trained and placed in top tech
                companies across the globe. Our metrics speak for themselves."
              </p>
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                View Success Stories
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                <div className="text-4xl font-black text-white mb-2">
                  5,000+
                </div>
                <div className="text-blue-100 text-sm uppercase font-semibold">
                  Trained
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                <div className="text-4xl font-black text-white mb-2">92%</div>
                <div className="text-blue-100 text-sm uppercase font-semibold">
                  Placement
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                <div className="text-4xl font-black text-white mb-2">200+</div>
                <div className="text-blue-100 text-sm uppercase font-semibold">
                  Partners
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                <div className="text-4xl font-black text-white mb-2">4.9/5</div>
                <div className="text-blue-100 text-sm uppercase font-semibold">
                  Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
