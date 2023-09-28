import React from "react";
import "../styles/dropdown.css"

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
        <a href="https://ntwist.com/project/sustainability-assistant/" className="li-element">Sustainibility</a>
        <a href="https://ntwist.com/metal-mining/" className="li-element">Mineral Processing</a>
        <a href="https://ntwist.com/mine-to-mill-to-mine-optimization/" className="li-element">Mine-To-Mill-To-Mine Optimization</a>
        <a href="https://ntwist.com/oil-gas/" className="li-element">Oil & Gas</a>
    </div>
  );
};

export default DropdownMenu;