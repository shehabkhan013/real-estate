import React from "react";

const BlogCard = ({
  href = "#",
  imgSrc = "",
  imgAlt = "blog image",
  text = "Blog title here",
}) => {
  return (
    <a href={href} className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img src={imgSrc} alt={imgAlt} className="w-full h-auto" />
      </div>
      <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
        {text}
      </span>
    </a>
  );
};

export default BlogCard;
