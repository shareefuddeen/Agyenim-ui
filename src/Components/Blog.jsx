import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../images/Agyenim logo.png";

const api_url = import.meta.env.VITE_API_URL;

const Blog = () => {
  
  const [blog,setBlog] = useState([]);

  useEffect(()=>{
    const fetchBlog =async()=>{
      try {
        const response = await axios.get(`${api_url}/blogs/`)
        console.log(response.data);
        setBlog(response.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchBlog()
  },[])
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-800 text-white py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <a href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
            src={logo}
            alt="Agyenim Boateng Foundation logo"
            width={46}
            height={46}
            className="rounded-full"
          />
          <span className="text-lg font-semibold hidden md:inline-block">
            Agyenim Boateng Foundation
          </span>
        </a>
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-bold">
            Agyenim Boateng Foundation Blog
          </h1>
          <p className="text-xs md:text-sm mt-1">
            Empowering lives, inspiring change.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 py-8">
        {blog.length > 0 ? (
          blog.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow p-4 md:p-6 mb-6 transition hover:shadow-md"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-500 text-xs md:text-sm mb-2">
                {post.date}
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </article>
          ))
        ) : (
          <p className="text-gray-500 text-center">
            No blog posts available at the moment.
          </p>
        )}
      </main>

      <footer className="text-center py-4 text-gray-500 text-xs md:text-sm">
        &copy; 2025 Agyenim Boateng Foundation. All rights reserved.
      </footer>
    </div>
  );
};

export default Blog;
