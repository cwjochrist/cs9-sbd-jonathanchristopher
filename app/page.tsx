import React from "react";
import { Flame, Star, ShoppingCart } from "lucide-react";

export default function IndomieLandingPage() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-red-600">Indomie</h1>
        <nav className="space-x-6 hidden md:block font-medium">
          <a href="#flavors" className="hover:text-red-600">Flavors</a>
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#buy" className="hover:text-red-600">Buy</a>
        </nav>
        <button className="px-4 py-2 bg-red-600 text-white rounded-2xl shadow">
          Order Now
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-red-500 to-yellow-400 text-white">
        <h2 className="text-5xl font-extrabold mb-6">
          Taste the Legend 🍜
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Indomie is more than just noodles — it’s a global favorite loved for its rich flavor and quick preparation.
        </p>
        <button className="px-8 py-4 bg-white text-red-600 rounded-2xl font-semibold shadow-lg">
          Explore Flavors
        </button>
      </section>

      {/* Flavors */}
      <section id="flavors" className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Flavors</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "Mi Goreng",
            "Chicken Curry",
            "Hot & Spicy",
          ].map((flavor, i) => (
            <div key={i} className="p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
              <Flame className="mx-auto mb-4 text-red-500" size={32} />
              <h3 className="text-xl font-semibold mb-2">{flavor}</h3>
              <p className="text-gray-600">
                Delicious, iconic taste that keeps you coming back for more.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8 bg-yellow-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Everyone Loves Indomie</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <Star className="mx-auto mb-3 text-yellow-500" />
            <p>Authentic and rich flavors</p>
          </div>
          <div>
            <Flame className="mx-auto mb-3 text-red-500" />
            <p>Quick and easy to prepare</p>
          </div>
          <div>
            <ShoppingCart className="mx-auto mb-3 text-green-600" />
            <p>Available worldwide</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="buy" className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Craving Indomie?</h2>
        <p className="mb-6">Get your favorite noodles today and enjoy the taste everyone loves.</p>
        <button className="px-8 py-3 bg-white text-red-600 rounded-2xl font-semibold">
          Buy Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600">
        © 2026 Indomie (School Project)
      </footer>
    </div>
  );
}