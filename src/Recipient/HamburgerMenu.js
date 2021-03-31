import React, { useState, useEffect } from "react";
import "./style.css";

export default function HamburgerMenu(props) {
  return (
    <div
      className={props.isOpen ? "hamburgerMenu isOpen" : "hamburgerMenu"}
      onClick={() => props.setIsOpen(!props.isOpen)}
    >
      <div className="line1 line" />
      <div className="line2 line" />
      <div className="line3 line" />
    </div>
  );
}
