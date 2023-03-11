import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [fetchErr, setFetchErr] = useState(null);
  const [isloading, setIsloading] = useState(true);

  const handleDelete = (id) => {
    setBlogs((prevBlogs) => {
      return prevBlogs.filter((b) => b.id != id);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("blogs").select();
      if (error) {
        console.log(error);
        setFetchErr(error.message);
        setIsloading(false);
      }
      if (data) {
        console.log(data);
        setBlogs(data);
        setFetchErr(null);
        setIsloading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="section-list">
      {fetchErr && <h2 className="heading-primary">{fetchErr}</h2>}
      {isloading && <h2 className="heading-primary text-center">Loading...</h2>}
      <Card blogs={blogs} onDelete={handleDelete} />
    </div>
  );
};
export default Home;
