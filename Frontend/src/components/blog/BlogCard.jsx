import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  // 1. Safety check to prevent "Cannot read properties of undefined"
  if (!post) return null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={post.image || "https://via.placeholder.com/400x200"} // 2. Fallback image
          alt={post.title || "Blog Post"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {post.category}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`} className="mt-4 block">
          <h3 className="text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
            {post.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        {/* Footer info - Pushed to bottom */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-6">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500">
              {post.date}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400">
              {post.readTime}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-bold text-blue-600 transition-all hover:gap-2"
          >
            Read More
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
