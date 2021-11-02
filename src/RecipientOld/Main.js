import React, { useState, useEffect } from "react";
import "./style.css";

const DataField = ({ c, d }) =>
  c == "Security Question" ? (
    <div className="dataField">
      <p className="font-weight-semi-bold">{c}</p>
      <p>Q: {d["Security Question"]}</p>
      <p>
        A:&nbsp;
        <span className="font-weight-semi-bold">{d["Security Answer"]}</span>
      </p>
    </div>
  ) : c == "Access Link" ? (
    <a href={d[c]} className="accessButton" target="_blank">
      Access
    </a>
  ) : (
    <div className="dataField">
      <p className="font-weight-semi-bold">{c}</p>
      <p>{d[c]}</p>
    </div>
  );

export default function Main(props) {
  console.log(props);

  return (
    <div className="mainContainer">
      <img src={props.imgURL} className="mainContainerChild jumbotronImage" />

      <div className="mainContainerChild dataArea">
        {props.data
          .map(d => d.fields)
          .map(d => (
            <div className="dataBlock">
              <p className="font-weight-semi-bold">{d[props.titleColumn]}</p>
              <div className="dataFields font-weight-medium">
                {props.fields.map(c => (
                  <DataField c={c} d={d} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
