import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import Card from "../Components/Card";
import supabase from "../config/supabaseClient";

const Search = () => {
  const [search, setSearch] = useState("");
  const [newBlogs, setNewBlogs] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [blog, setBlog] = useState(null);

  // const handle = (e) => {
  //   e.preventDefault();
  //   setNewBlogs([
  //     blogs.find(
  //       (blog) => blog.category.toLowerCase() === search.toLowerCase()
  //     ),
  //   ]);
  // };
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("blogs").select();
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        setNewBlogs(data);
        setIspending(false);
      }
    };

    fetchData();
  }, []);

  const filterData = async (e) => {
    e.preventDefault();
    setBlog(
      newBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="section-search">
        <form className="search-form" onSubmit={filterData}>
          <input
            type="text"
            className="input-search"
            placeholder="What Blog are you looking for"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn btn-search">
            Search
          </button>
        </form>
      </div>
      {ispending && (
        <h2 className="heading-secondary text-center">Loading...</h2>
      )}
      <Card blogs={blog} />
    </div>
  );
};

export default Search;
