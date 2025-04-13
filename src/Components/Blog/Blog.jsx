import React from "react";
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookmark,markAsRead }) => {
  // console.log(handleBookmark);
  // console.log(blog)
  const { title, cover, author, author_img } = blog;
  return (
    <div>
      <div className="card bg-base-100   shadow-sm">
        <figure>
          <img   src={cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author-container flex justify-around items-center ">
            <h4 className="font-bold">{author}</h4>
            <img className="w-6 rounded-4xl" src={author_img} alt="" />
            <button>
              <FaBookmark size={20} 
              onClick={()=>handleBookmark(blog)} />
            </button>
          </div>
          <h2 className="card-title"> {title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>

          <div className="flex">
            {blog.hashtags.map((hashtag) => (
              <p>{hashtag} </p>
            ))}
          </div>

          <div className="card-actions justify-end">
            <button onClick={()=>{markAsRead(blog.posted_time,blog.id)}} className="btn btn-primary">Mark as Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
