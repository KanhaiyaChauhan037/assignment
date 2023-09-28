import React, { useEffect, useState } from "react";
import "../styles/industries.css";
import AnimateIn from "../utils/AnimateIn";

function Industries({ isOdd, title, desc, img, href, isLast }) {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const handleResize = () => {
    setWindowWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <div
        style={{
          flexDirection:
            windowWidth > 1000 ? (isOdd ? "row-reverse" : "row") : "column",
          marginBottom: isLast ? "2rem" : "4rem",
        }}
        className="industries"
      >
        <div
          className="info"
          style={{
            marginLeft: windowWidth > 1000 ? (isOdd ? "3rem" : "0") : "0",
            marginRight: windowWidth > 1000 ? (isOdd ? "0" : "3rem") : "0",
          }}
        >
          <h3 className="title">{title}</h3>
          <p className="desc">{desc}</p>
          <a href={href}><button className="read-more-button">Read More</button></a>
        </div>
        <img src={img} alt="Industry Image" className="img" />
      </div>
  );
}

export default Industries;
