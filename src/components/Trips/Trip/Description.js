import React from "react";

const Description = (props) => {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return `${str.slice(0, num)} ...`;
  };

  return (
    <p
      style={{
        fontSize: "0.65rem",
        lineHeight: "1.3rem",
        marginBottom: "1rem",
        color: "#808080",
      }}
    >
      {truncateString(props.description, 100)}
      <a
        href={props.url}
        style={{
          color: "#2c9cdb",
        }}
      >
        Read more
      </a>
    </p>
  );
};

export default Description;
