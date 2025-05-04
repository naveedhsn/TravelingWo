'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://travelingwo.onrender.com/api/posts/${slug}/`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <p className="text-center py-10 text-gray-600">Loading post...</p>;
  }

  if (!post) {
    return <p className="text-center py-10 text-gray-600">Post not found.</p>;
  }

  return (
    <div className="bg-white text-gray-800 flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-5 space-y-3 sm:space-y-0">
          <h1 className="text-2xl font-bold text-orange-500">
            <Link href="/">TravelingWo</Link>
          </h1>
          <nav className="space-x-4 sm:space-x-6 font-medium text-center">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <Link href="/destinations" className="hover:text-orange-500">Destinations</Link>
            <Link href="/guides" className="hover:text-orange-500">Guides</Link>
            <Link href="/blog" className="hover:text-orange-500">Blog</Link>
            <Link href="/contact" className="hover:text-orange-500">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Blog Post Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        <Link href="/" className="text-orange-500 hover:underline text-sm mb-6 inline-block">← Back to Home</Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>

        {post.image && (
          <div className="relative w-full h-64 sm:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={`https://travelingwo.onrender.com${post.image}`}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <article className="prose max-w-none prose-sm sm:prose lg:prose-lg prose-orange">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-orange-500 py-8 text-center text-sm text-white">
        <p>&copy; {new Date().getFullYear()} TravelingWo. All rights reserved.</p>
      </footer>
    </div>
  );
}
