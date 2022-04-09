import React from "react";

const Tags = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "1rem",
      }}
    >
      {props.tags.map((tag) => (
        <li
          key={tag}
          onClick={(event) => {
            props.queryFromTagsHandler(tag);
          }}
          style={{
            listStyleType: "none",
            textDecoration: "underline",
            fontSize: "0.6rem",
            cursor: "pointer",
            marginRight: "0.5rem",
            color: "#808080",
          }}
        >
          {tag}
        </li>
      ))}
    </div>
  );
};

export default Tags;
