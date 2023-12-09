import React from "react";
import Division from "../components/Division";

const Home = (token) => {
  return (
    <div>
      Home
      {token.token}
      <Division />
      <Division />
      <Division />
      <Division />
    </div>
  );
};

export default Home;
