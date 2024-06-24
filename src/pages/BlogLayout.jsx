import React from "react";
import { Link, Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="travel">Travel</Link>
        </li>
        <li>
          <Link to="education">Education</Link>
        </li>
        <li>
          <Link to="programming">Programming</Link>
        </li>
      </nav>

      <Outlet />
    </>
  );
};

export default BlogLayout;
