import React from "react";
import Background from "./Images/coffee-and-donuts-pop-color-background.png";

export default function App() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

