import React from "react";
import "./Logo.css";
export default function logo() {
  return (
    <div id="logo">
      <div className="logo-p">p</div>
      <span
        style={{
          color: "#ff0000",
          fontSize: "20px",
          fontWeight: "bold",
          marginLeft: "15px",
        }}
      >
        PaSE Covid-19 Tracker
      </span>
    </div>
  );
}
