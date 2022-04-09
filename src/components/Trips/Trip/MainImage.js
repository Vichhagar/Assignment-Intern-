import React from "react";

// for media query
import { StyleRoot } from "radium";

const MainImage = (props) => {
  return (
    <StyleRoot>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={props.photos[0]}
          alt=""
          style={{
            objectFit: "cover",
            width: "150px",
            height: "100%",
            borderRadius: "5%",
            marginRight: "1rem",
            "@media (max-width: 500px)": {
              width: "100%",
            },
          }}
        />
      </div>
    </StyleRoot>
  );
};

export default MainImage;
