import React from "react";
import MiddleText from "./MiddleText";

const Hero = () => {
  return (
    <div
      className="bg-cover h-screen bg-center flex text-white rounded-3xl"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1545809074-59472b3f5ecc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
        <MiddleText />
    </div>
  );
};

export default Hero;
