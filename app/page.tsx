import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">Brand</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow">
          Get Started
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Build something amazing
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A clean and modern landing page template built with Tailwind CSS to help you launch faster.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow">
            Start Free
          </button>
          <button className="px-6 py-3 bg-white border rounded-2xl">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {["Fast", "Responsive", "Customizable"].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Simple Pricing</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {["Basic", "Pro", "Enterprise"].map((plan, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow text-center">
              <h3 className="text-xl font-semibold mb-4">{plan}</h3>
              <p className="text-3xl font-bold mb-6">$19</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-xl">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6">Join now and build your next project faster.</p>
        <button className="px-8 py-3 bg-white text-blue-600 rounded-2xl font-semibold">
          Sign Up
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2026 Brand. All rights reserved.
      </footer>
    </div>
  );
}
