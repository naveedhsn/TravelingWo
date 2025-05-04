'use client';

import Image from "next/image";
import Link from "next/link";

export default function GuidesPage() {
  const guides = [
    {
      title: "Backpacking Europe on a Budget",
      image: "/guides/europe.jpg",
      description: "Explore top European cities without breaking the bank with this complete guide.",
    },
    {
      title: "Solo Travel Safety Tips",
      image: "/guides/solo.jpg",
      description: "Stay safe and confident while traveling solo. Tips from seasoned travelers.",
    },
    {
      title: "Packing Essentials for Long Trips",
      image: "/guides/packing.jpg",
      description: "Maximize space and minimize stress with our smart packing guide.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-5 space-y-3 sm:space-y-0">
        <h1 className="text-2xl font-bold text-orange-500"><Link href="/">TravelingWo</Link></h1>
        <nav className="space-x-4 sm:space-x-6 font-medium text-center">
            <Link href="/">Home</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">Travel Guides</h2>
        <p className="text-gray-600 text-base md:text-lg">
          Discover detailed travel guides to help you plan smarter, travel cheaper, and explore deeper.
        </p>
      </section>

      {/* Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white flex flex-col"
          >
            <div className="relative w-full h-48 md:h-60">
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-600">{guide.description}</p>
              </div>
              <Link
                href="#"
                className="text-orange-500 mt-4 inline-block hover:underline font-medium"
              >
                Read Guide →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 py-6 text-center text-sm text-white mt-auto">
        <p>&copy; {new Date().getFullYear()} TravelingWo All rights reserved.</p>
      </footer>
    </div>
  );
}
