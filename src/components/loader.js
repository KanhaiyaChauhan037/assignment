import React from "react";
import lg from "../assets/lg.png";
import "../styles/loader.css";

function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={lg} alt="logo" width="100vw" className="logo-spinner" />
      <div class="loader"></div>
    </div>
  );
}

export default Loader;
