import React, { useState } from "react";

// for media query
import { StyleRoot } from "radium";

const Search = (props) => {
  const [query, setQuery] = useState([]);

  const searchTripHandler = (event) => {
    event.preventDefault();
    props.searchQueryHandler(query);
    setQuery("");
  };

  return (
    <StyleRoot>
      <form
        onSubmit={searchTripHandler}
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <input
          type="text"
          name="keyword"
          value={query}
          placeholder="Find and go..."
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          style={{
            outline: "none",
            border: "none",
            borderBottom: "1px solid #bdbcbc",
            textAlign: "center",
            width: "100%",
            ":focus": {
              borderColor: "#2c9cdb",
            },
            "@media (max-width: 500px)": {
              width: "90%",
            },
          }}
        />
      </form>
    </StyleRoot>
  );
};

export default Search;
