import React from "react";
import Contact from "../Pages/Contact";
import Service from "../Pages/Service";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterFile = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterFile;
