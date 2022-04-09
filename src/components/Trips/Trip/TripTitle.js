import React from "react";

const TripTitle = (props) => {
  return (
    <a
      style={{
        fontSize: "0.80rem",
        textDecoration: "none",
        cursor: "pointer",
        color: "#333",
        marginBottom: "1rem",
      }}
      href={props.url}
    >
      <h4>{props.title}</h4>
    </a>
  );
};

export default TripTitle;
