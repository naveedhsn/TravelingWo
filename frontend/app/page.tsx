'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
}

export default function WandericHome() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/posts/")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5">
          <h1 className="text-2xl font-bold text-orange-500">TravelingWo</h1>
          <nav className="space-x-6 font-medium">
            <Link href="#">Home</Link>
            <Link href="#">Destinations</Link>
            <Link href="#">Guides</Link>
            <Link href="#">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src="/hero.jpg"
          alt="City Street"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Next Adventure</h2>
          <p className="max-w-xl text-lg">Find the best stays, explore new destinations, and read real travel stories</p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={`http://localhost:8000${post.image}`}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                {/* Wrap Markdown inside a div to apply styles */}
                <div className="text-gray-600 text-sm mt-2">
                  <ReactMarkdown>
                    {`${post.content.slice(0, 200)}...`}
                  </ReactMarkdown>
                </div>
                <Link href={`/blog/${post.slug}`} className="inline-block mt-3 text-orange-500 font-medium hover:underline">Read More →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">City Escapes</Link></li>
              <li><Link href="#" className="hover:underline">Beach Stays</Link></li>
              <li><Link href="#" className="hover:underline">Travel Tips</Link></li>
              <li><Link href="#" className="hover:underline">Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Subscribe</h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-md"
              />
              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">Subscribe</button>
            </form>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-10 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} TravelingWo All rights reserved.</p>
      </footer>
    </main>
  );
}
