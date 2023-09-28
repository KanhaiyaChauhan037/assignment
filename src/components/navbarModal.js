import React, { useState } from "react";
import "../styles/navbar.css";
import DropdownMenu from "../utils/dropdownmenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function NavbarModal() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  return (
    <div className="modal-nav">
      <div className="modal-nav-links">
        <div className="modal-link">Home</div>
        <div
          className="modal-link"
          onMouseEnter={() => setIsDropDownVisible(true)}
          onMouseLeave={() => setIsDropDownVisible(false)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            Industries
            {isDropDownVisible ? (
              <KeyboardArrowRightIcon
                onClick={() => setIsDropDownVisible(false)}
              />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
        </div>
        <ul
          style={{ display: isDropDownVisible ? "block" : "none" }}
          className="modal-dropdown"
        >
          <li className="modal-dropdown-items">Sustainibility</li>
          <li className="modal-dropdown-items">Mineral Processing</li>
          <li className="modal-dropdown-items">
            Mine-to-mill-to-mine optimization
          </li>
          <li className="modal-dropdown-items">Oil & Gas</li>
        </ul>
        <div className="modal-link">AI Software</div>
        <div className="modal-link">Blog</div>
        <div className="modal-link">Contact Us</div>
      </div>
    </div>
  );
}

export default NavbarModal;
