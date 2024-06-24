import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const user = {
    firstName: "Adesh",
    lastName: "Jadhav",
    age: 22,
    country: "India",
  };
  return (
    <>
      <nav>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="books">Books</Link></li>
          <li><Link to="blogs">Blogs</Link></li>
        </ul>         
      </nav>
      <Outlet context={user} />
    </>
  );
};

export default Layout;
