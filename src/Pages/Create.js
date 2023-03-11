import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");

  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [formErr, setFormErr] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscomplete, setIscomplete] = useState(true);
  const auth = useRef(null);
  const cat = useRef(null);
  const image = useRef(null);
  const tex = useRef(null);
  const tit = useRef(null);

  const handle = async (e) => {
    e.preventDefault();
    if (!author || !category || !img || !title || !text) {
      setFormErr("Please fill all input field");
      return;
    }

    const { data, error } = await supabase
      .from("blogs")
      .insert([{ text, category, title, img, author }]);

    if (error) {
      console.log(error.message);
      setIspending(false);
      setFormErr(true);
    }
    if (data) {
      console.log(data);
      navigate("/");
      setFormErr(null);
      setIspending(true);
      setIscomplete(false);
      cat.current.value =
        image.current.value =
        tex.current.value =
        tit.current.value =
        auth.current.value =
          "";
    }
  };

  return (
    <div className="create-blog">
      <h2 className="heading-secondary">Create Blog</h2>
      <form className="create-form" onSubmit={handle}>
        <div>
          <label>Author Name</label>
          <input
            type="text"
            className="create-input"
            ref={auth}
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Blog Category</label>
          <input
            type="text"
            className="create-input"
            ref={cat}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            className="create-input"
            ref={image}
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
          <label>Blog Title</label>
          <input
            type="text"
            className="create-input"
            ref={tit}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Blog Text</label>
          <textarea
            ref={tex}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        {iscomplete ? (
          <button className="btn btn-create">Create Now</button>
        ) : (
          <button disabled className="btn btn-create">
            Complete
          </button>
        )}
      </form>
      {formErr && <h2 className="heading-secondary">{formErr}</h2>}
      {ispending && <h2 className="heading-secondary">Adding Complete</h2>}
    </div>
  );
};

export default Create;
