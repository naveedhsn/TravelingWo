'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DestinationsPage() {
  const destinations = [
    { name: "Bali, Indonesia", image: "/destinations/bali.jpg" },
    { name: "Paris, France", image: "/destinations/paris.jpg" },
    { name: "Maldives", image: "/destinations/maldives.jpg" },
  ];

  const [query, setQuery] = useState("");

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-5 space-y-4 sm:space-y-0">
        <h1 className="text-2xl font-bold text-orange-500"><Link href="/">TravelingWo</Link></h1>
        <nav className="space-x-4 sm:space-x-6 text-center">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <Link href="/destinations" className="hover:text-orange-500">Destinations</Link>
            <Link href="/guides" className="hover:text-orange-500">Guides</Link>
            <Link href="/blog" className="hover:text-orange-500">Blog</Link>
            <Link href="/contact" className="hover:text-orange-500">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
            Top Travel Destinations
          </h2>

          {/* Search Box */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full max-w-md p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((dest, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3">
                    <h3 className="text-white text-lg font-semibold text-center group-hover:underline">
                      {dest.name}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No destinations found.
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-500 py-6 text-center text-sm text-white">
        <p>&copy; {new Date().getFullYear()} TravelingWo All rights reserved.</p>
      </footer>
    </div>
  );
}
