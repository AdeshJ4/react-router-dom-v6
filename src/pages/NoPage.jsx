import React from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>No Page: 404 Not FOund</h1>
      <button onClick={() => navigate("/")}>GO to Home</button>
    </div>
  );
};

export default NoPage;
