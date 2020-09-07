import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <div>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          {props.title}
        </span>
        <img src={props.indicator} alt="indicator" />
      </div>
      <div style={{ fontSize: "30px", fontWeight: "bold", marginTop: "20px" }}>
        {props.value}
      </div>

      <div></div>
    </div>
  );
}
