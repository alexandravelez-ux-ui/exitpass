import React, { useState, useEffect } from "react";
import "./style.css";
import HamburgerMenu from "./HamburgerMenu";
import classSet from "react-classset";


export default function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerClassSet = classSet({
    opened: isOpen,
    sidebarContainer: true,
    "font-weight-bold": true,
    closed: !isOpen, 
  })
  return (
    <div className="sidebar">
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={containerClassSet}>
        <div className="sidebarContent">
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
