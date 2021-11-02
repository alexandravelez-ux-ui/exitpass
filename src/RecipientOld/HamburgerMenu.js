import React, { useState, useEffect } from "react";
import "./style.css";
import classSet from "react-classset";

export default function HamburgerMenu(props) {
  const [isInitial, setIsInitial] = useState(true);
  useEffect(() => {
    if (props.isOpen && isInitial) {
      setIsInitial(false)
    }
  }, [props.isOpen])
  const hamburgerMenuClassSet = classSet({
    hamburgerMenu: true, 
    isOpen: props.isOpen && !isInitial,
    isClosed: !props.isOpen && !isInitial
  })
  return (
    <div
      className={hamburgerMenuClassSet}
      onClick={() => props.setIsOpen(!props.isOpen)}
    >
      <div className="line1 line" />
      <div className="line2 line" />
      <div className="line3 line" />
    </div>
  );
}
