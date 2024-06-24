import React from "react";
import { useOutletContext } from "react-router-dom";

const About = () => {
  const userInfo = useOutletContext();

  return (
    <>
      <h1>About</h1>
      <h2>First Name: {userInfo.firstName}</h2>
      <h2>Last Name: {userInfo.lastName}</h2>
      <h2>Age: {userInfo.age}</h2>
      <h2>Country: {userInfo.country}</h2>
    </>
  );
};

export default About;
