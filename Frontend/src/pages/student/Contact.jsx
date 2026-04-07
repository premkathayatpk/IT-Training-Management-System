import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form logic here (e.g., API call)
    console.log("Form Submitted:", formData);
    alert(
      "Thanks for reaching out! The NEPTECH team will get back to you soon.",
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* Header Section */}
      <section className="py-20 bg-slate-900 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="max-w-xl mx-auto text-slate-400 text-lg">
          Have questions about our bootcamps or corporate training? We're here
          to help you navigate your tech journey.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 -mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Email Us</h3>
                  <p className="text-slate-500 text-sm">hello@neptech.edu</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Visit Us</h3>
                  <p className="text-slate-500 text-sm">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Call Us</h3>
                  <p className="text-slate-500 text-sm">+977 1-4000000</p>
                </div>
              </div>
            </div>

            {/* Social Links placeholder */}
            <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="font-bold text-xl mb-2">Join the Community</h3>
              <p className="text-blue-100 text-sm mb-4">
                Follow us for daily coding tips and academy updates.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-white/20 hover:bg-white/40 cursor-pointer"></div>
                <div className="w-8 h-8 rounded bg-white/20 hover:bg-white/40 cursor-pointer"></div>
                <div className="w-8 h-8 rounded bg-white/20 hover:bg-white/40 cursor-pointer"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em]"
                  onChange={handleChange}
                >
                  <option>General Inquiry</option>
                  <option>Admission Support</option>
                  <option>Corporate Training</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Simple Map Placeholder */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="w-full h-80 bg-slate-200 rounded-3xl overflow-hidden flex items-center justify-center text-slate-500 border border-slate-100">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-2 opacity-20"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-medium tracking-wide italic">
              Interactive Map Integration Goes Here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
