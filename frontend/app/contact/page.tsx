'use client';

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5">
          <h1 className="text-2xl font-bold text-orange-500">TravelingWo</h1>
          <nav className="space-x-6 font-medium">
            <Link href="/">Home</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Contact Form */}
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions, suggestions, or want to collaborate? Fill out the form below!
        </p>

        <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              placeholder="Type your message..."
              className="w-full border p-3 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Follow us on</p>
          <div className="flex justify-center space-x-6 text-orange-500">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-orange-600 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-orange-600 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-orange-600 transition" />
            </a>
            <a href="mailto:contact@travelingwo.com" aria-label="Email">
              <Mail className="w-6 h-6 hover:text-orange-600 transition" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-500 py-8 text-center text-sm text-white mt-auto">
        <p>&copy; {new Date().getFullYear()} TravelingWo All rights reserved.</p>
      </footer>
    </div>
  );
}
