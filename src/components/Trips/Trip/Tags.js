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
      <p
        style={{
          fontSize: "0.6rem",
          color: "#808080",
        }}
      >
        Tags: &nbsp;
      </p>
      {props.tags.map((tag) => (
        <a
          key={tag}
          onClick={(event) => {
            //this will pass the tag name to "App.js" as a search query
            //"Tags.js -> Trip.js -> Trips.js -> App.js"
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
        </a>
      ))}
    </div>
  );
};

export default Tags;
