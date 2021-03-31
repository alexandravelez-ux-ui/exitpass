import React, { useState, useEffect } from "react";
import "./style.css";
import HamburgerMenu from "./HamburgerMenu";

export default function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="sidebarContainer font-weight-bold">
        <div className={isOpen ? "sidebarContent" : "hidden sidebarContent"}>
          <img className="logo" src="https://i.imgur.com/o9Py1iT.png" />
          {Object.entries(props.categories).map(([table, name]) => (
            <div
              className="sidebarContainerChild"
              onClick={() => props.setCurrentTable(table)}
            >
              <img className="sidebarIcon" src={props.sidebarIconURLs[table]} />
              {name}
            </div>
          ))}
          <a className="askforHelpButton" href="#">
            Ask for Help
          </a>
        </div>
      </div>
    </div>
  );
}
