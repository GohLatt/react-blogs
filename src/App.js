import React from "react";
import Home from "./Pages/Home";
import "./index.css";
import Nav from "./Components/Nav";
import Create from "./Pages/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import ShowBlogPage from "./Pages/ShowBlogPage";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<ShowBlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
