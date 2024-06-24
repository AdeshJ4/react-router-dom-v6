import React from "react";
import { Link, Outlet } from "react-router-dom";

const ContactLayout = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="police">Police</Link>
        </li>
        <li>
          <Link to="office">Office</Link>
        </li>
      </nav>

      <Outlet />
    </>
  );
};

export default ContactLayout;
