import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <h2 className="heading-primary">Famous Blogs</h2>
      <ul className="nav-link">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/create">
            Create Blogs
          </Link>
        </li>
        <li>
          <Link className="link" to="/search">
            Search Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
