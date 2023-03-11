import React from "react";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Card = ({ blogs, onDelete }) => {
  const handleDelete = async (e) => {
    const { error } = await supabase.from("blogs").delete().eq("id", e);

    if (error) {
      console.log(error);
      console.log(e);
    }

    onDelete(e);
  };
  return (
    <div className="blog-list">
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="blogs" key={blog.id}>
              <img src={blog.img} alt="blog photo" className="blog-img" />
              <div className="text-box">
                <p className="blog-title">{blog.title}</p>
                <div className="flex">
                  <p>{blog.author}</p>
                  <p className="category">{blog.category}</p>
                </div>
              </div>
              <div className="btn-container">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
                <button className="delete-btn">
                  <Link className="readmore-link" to={"/" + blog.id}>
                    Read More
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
