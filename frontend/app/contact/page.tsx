'use client';

import Link from "next/link";
import { useState } from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (field: string, value: string) => {
    if (field === "message" && value.length > 500) return;
    setFormData({ ...formData, [field]: value });
    if (value.trim() !== "") {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { name: "", email: "", message: "" };
    let hasError = false;

    if (formData.name.trim() === "") {
      newErrors.name = "Required field";
      hasError = true;
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Required field";
      hasError = true;
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Required field";
      hasError = true;
    }

    setErrors(newErrors);
    if (!hasError) {
      alert("Message submitted!");
      // API call or form logic here
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-5 space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-orange-500"><Link href="/">TravelingWo</Link></h1>
        <nav className="space-x-4 text-center md:text-left">
            <Link href="/">Home</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full px-4 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-10">
          Have a question, suggestion, or just want to say hello? Drop us a message and we’ll get back to you soon!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Your email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Type your message..."
              className="w-full border border-gray-300 p-3 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 pr-12"
            ></textarea>
            <span className="absolute bottom-2 right-3 text-sm text-gray-500">
              {formData.message.length}/500
            </span>
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Follow us on</p>
          <div className="flex justify-center gap-6 text-orange-500">
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
      <footer className="bg-orange-500 py-6 text-center text-white text-sm mt-auto">
        <p>&copy; {new Date().getFullYear()} TravelingWo. All rights reserved.</p>
      </footer>
    </div>
  );
}
