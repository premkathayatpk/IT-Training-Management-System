import React from "react";

const About = () => {
  // Simple data for the stats section
  const stats = [
    { label: "Graduates", value: "2,00+" },
    { label: "Course Modules", value: "50+" },
    { label: "Partner Companies", value: "10+" },
    { label: "Success Rate", value: "85%" },
  ];

  return (
    <div className="bg-white font-sans text-slate-900">
      {/* Hero Section with a subtle SVG pattern */}
      <section className="relative py-24 bg-slate-900 text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <path
              d="M10 10L90 90M90 10L10 90"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Empowering the <span className="text-blue-500">Next Gen</span> of
            Tech
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            NEPTECH Academy is bridging the gap between traditional education
            and the fast-paced tech industry through immersive learning.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 bg-white shadow-2xl rounded-2xl p-8 border border-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Our Mission
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            At NEPTECH, we believe that quality tech education should be
            accessible, practical, and career-oriented. Our curriculum is
            crafted by industry veterans to ensure you aren't just
            learning—you're building.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Rapid Upskilling</h4>
                <p className="text-slate-600">
                  Accelerating career growth through high-impact, hands-on
                  projects.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">
                  Industry Recognition
                </h4>
                <p className="text-slate-600">
                  Certifications that hold weight with top-tier hiring partners
                  globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800"
              alt="Students collaborating"
              className="relative z-10 rounded-3xl shadow-2xl object-cover h-[400px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose NEPTECH?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We focus on the trio of success: Modern Tools, Vibrant Community,
              and Real Results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Curriculum Excellence",
                desc: "Always updated with the latest frameworks and industry standards.",
                color: "blue",
              },
              {
                title: "Community Driven",
                desc: "Join a network of thousands of alumni and tech professionals globally.",
                color: "indigo",
              },
              {
                title: "Outcome Focused",
                desc: "We don't just teach code; we provide a roadmap to your first tech job.",
                color: "emerald",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="group p-10 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 mb-6 rounded-xl bg-${value.color}-50 flex items-center justify-center text-${value.color}-600`}
                >
                  <span className="text-2xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
