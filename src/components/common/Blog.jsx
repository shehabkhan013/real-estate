import React from "react";

import BlogCard from "./BlogCard";

const blogPosts = [
  {
    href: "blog-details.html",
    imgSrc: "./images/blog/blog-footer-01.jpg",
    imgAlt: "blog image 1",
    text: "I think really important to design with...",
  },
  {
    href: "blog-details.html",
    imgSrc: "./images/blog/blog-footer-02.jpg",
    imgAlt: "blog image 2",
    text: "Recognizing the need is the primary...",
  },
];

const Blog = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            href={post.href}
            imgSrc={post.imgSrc}
            imgAlt={post.imgAlt}
            text={post.text}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
