import React from "react";
import "./Row.css";
export default function Row(props) {
  return (
    <div
      className={props.hover ? "row-hover" : " "}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "53px",
        width: "1000px",
        justifyContent: "space-around",
        backgroundColor: props.backgroundColor,
        border: props.border,
        cursor: "pointer",
        color: "#000",
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "10px",
      }}
    >
      <span>{props.country}</span>
      <span>{props.active}</span>
      <span>{props.recoveries}</span>
      <span>{props.deaths}</span>
      <span>{props.cases}</span>
    </div>
  );
}
