import React from "react";
import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="/books/new">New Book</Link>
        </li>
        <li>
          <Link to="/books/1">Think Like a monk</Link>
        </li>
        <li>
          <Link to="/books/2">You can win</Link>
        </li>
      </nav>

      <Outlet />
    </>
  );
};

export default BookLayout;
