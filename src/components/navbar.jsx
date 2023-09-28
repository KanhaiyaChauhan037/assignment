import React, { useState } from "react";
import "../styles/navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

//dropdown menu
import DropdownMenu from "../utils/dropdownmenu";

//image and icon
import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ isScrolled, handleClick }) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
    handleClick();
  };

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: clicked ? "white" : isScrolled ? "white" : "#224d88",
      }}
    >
      {/* logo */}
      <div style={{ textDecoration: "none" }}>
        <img
          src={clicked ? logoDark : isScrolled ? logoDark : logo}
          alt="logo"
          height="50vh"
          backgroundColor="red"
        />
      </div>

      {/* add links for navigation*/}
      <div className="nav-links">
        <div
          className="link"
          style={{
            color: isScrolled ? "#476783" : "white",
            borderBottom: "1px solid black",
            height: "3vh",
            alignSelf: "center",
          }}
        >
          Home
        </div>
        <div
          className="link"
          style={{ color: isScrolled ? "#476783" : "white" }}
          onMouseEnter={() => setIsDropDownVisible(true)}
          onMouseLeave={() => setIsDropDownVisible(false)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            Industries
            <ArrowDropDownIcon />
          </div>
          {/* <DropdownMenu /> */}
          {isDropDownVisible && <DropdownMenu />}
        </div>
        <a
          href="https://ntwist.com/ai-software/"
          className="link"
          style={{ color: isScrolled ? "#476783" : "white" }}
        >
          AI Software
        </a>
        <a
          href="https://ntwist.com/blog/"
          className="link"
          style={{ color: isScrolled ? "#476783" : "white" }}
        >
          Blog
        </a>
        <a
          href="https://ntwist.com/contact-us/"
          className="link"
          style={{ color: isScrolled ? "#476783" : "white" }}
        >
          Contact Us
        </a>
      </div>

      <div className="smaller-screens">
        {clicked ? (
          <CloseIcon onClick={() => handleButtonClick()} />
        ) : (
          <MenuIcon onClick={() => handleButtonClick()} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
