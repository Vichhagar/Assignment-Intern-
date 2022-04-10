import React from "react";

const TripTitle = (props) => {
  return (
    <a
      style={{
        fontSize: "0.80rem",
        textDecoration: "none",
        cursor: "pointer",
        color: "#333",
      }}
      href={props.url}
    >
      <h4
        style={{
          marginBottom: "0.6rem",
        }}
      >
        {props.title}
      </h4>
    </a>
  );
};

export default TripTitle;
